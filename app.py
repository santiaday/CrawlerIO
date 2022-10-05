import spacy
import numpy as np
import requests
from requests.models import MissingSchema
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from bs4 import BeautifulSoup
import urllib.request
from requests_html import HTMLSession
from keybert import KeyBERT

import nltk
nltk.download('punkt')

nlp = spacy.load("en_core_web_lg")


class webpage:
    def __init__(self, title, url, keywords, metaDesc):
        self.title = title
        self.url = url
        self.metaDesc = metaDesc
        self.keywords = keywords


def beautifulsoup_extract_text_fallback(url):
    
    session_obj = requests.Session()
    html = session_obj.get(url, headers={"User-Agent": "Mozilla/5.0"})

    # html = urlopen(request_site).read()
    soup = BeautifulSoup(html.text, 'html.parser')
    
    # Finding the text:
    text = soup.find_all(text=True)
    
    # Remove unwanted tag elements:
    cleaned_text = ''
    blacklist = [
        '[document]',
        'noscript',
        'header',
        'html',
        'meta',
        'head', 
        'input',
        'script',
        'style',]

    for item in text:
        if item.parent.name not in blacklist:
            cleaned_text += '{} '.format(item)
            
    # Remove any tab separation and strip the text:
    cleaned_text = cleaned_text.replace('\t', '')
    return cleaned_text.strip()

def get_source(url):

    try:
        session = HTMLSession()
        response = session.get(url)
        return response

    except requests.exceptions.RequestException as e:
        print(e)

def scrape_google(query):

    query = urllib.parse.quote_plus(query)
    response = get_source("https://www.google.co.uk/search?q=" + query)

    links = list(response.html.absolute_links)
    google_domains = ('https://www.google.', 
                      'https://google.', 
                      'https://webcache.googleusercontent.', 
                      'http://webcache.googleusercontent.', 
                      'https://policies.google.',
                      'https://support.google.',
                      'https://maps.google.')

    for url in links[:]:
        if url.startswith(google_domains):
            links.remove(url)

    return links


def get_results(query):
    
    query = urllib.parse.quote_plus(query)
    response = get_source("https://www.google.co.uk/search?q=" + query)
    
    return response

def parse_results(response):
    
    css_identifier_result = ".tF2Cxc"
    css_identifier_title = "h3"
    css_identifier_link = ".yuRUbf a"
    css_identifier_text = ".VwiC3b"
    
    results = response.html.find(css_identifier_result)

    output = []
    
    for result in results:

        item = {
            'title': result.find(css_identifier_title, first=True).text,
            'link': result.find(css_identifier_link, first=True).attrs['href'],
            'text': result.find(css_identifier_text, first=True).text,
        }
        
        output.append(item)
        
    return output

def google_search(query):
    response = get_results(query)
    return parse_results(response)

    

# subprocess.call("python -m spacy download en_core_web_sm",shell=True)

app = Flask(__name__)
CORS(app)

nlp = spacy.load("en_core_web_sm")






def extract_keywords(text):

    kw_model = KeyBERT()
    seed_keywords = ["property management software"]
    keywords = kw_model.extract_keywords(text, keyphrase_ngram_range=(1, 3), stop_words='english',
                              use_mmr=True, diversity=0.2, top_n=20, seed_keywords=seed_keywords)


    return keywords


@app.route('/api/keywords', methods=['GET'])

def main():

    webpages = []
    seoKeywords = []

    pages = google_search("property management software");


    for page in pages:

        
        text = beautifulsoup_extract_text_fallback(page.get("link"))

        for kw in extract_keywords(text):
            seoKeywords.append(kw)

        webpages.append(page)

    print(sorted(seoKeywords, key = lambda x: x[1], reverse=True))

    return webpages









    



