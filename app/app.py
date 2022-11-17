from doctest import master
from collections import Counter
from email.policy import default
import spacy
import subprocess
import json
import numpy as np
import requests
from requests.models import MissingSchema
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from string import punctuation
from googlesearch import search
from bs4 import BeautifulSoup
from urllib import request
import urllib.request
from urllib.request import Request, urlopen
import pandas as pd
from requests_html import HTML
from requests_html import HTMLSession
import yake
import re
from gingerit.gingerit import GingerIt
from keybert import KeyBERT
from numpy import loadtxt
from keyphrase_vectorizers import KeyphraseCountVectorizer
from flask import request as flask_request


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
    response = get_source("https://www.google.com/search?q=" + query)
    
    return response

def parse_results(response):
    
    css_identifier_result = ".tF2Cxc"
    css_identifier_title = "h3"
    css_identifier_link = ".yuRUbf a"
    css_identifier_text = ".VwiC3b"
    
    results = response.html.find(css_identifier_result)

    output = []
    
    for result in results:

        if(result.find(css_identifier_title, first=True) and  result.find(css_identifier_link, first=True) and result.find(css_identifier_text, first=True)):

            item = {
                'title': result.find(css_identifier_title, first=True).text,
                'link': result.find(css_identifier_link, first=True).attrs['href'],
                'text': result.find(css_identifier_text, first=True).text,
                'keywords': []
            }
            
            output.append(item)
        
    return output

def google_search(query):
    print(query)
    response = get_results(query)
    return parse_results(response)

    

# subprocess.call("python -m spacy download en_core_web_sm",shell=True)

app = Flask(__name__)
CORS(app)

nlp = spacy.load("en_core_web_sm")


def extract_keywords(text, stopWords, source, sourceTitle, initial_keywords):

    kw_model = KeyBERT()

    this_keywords = kw_model.extract_keywords(text, vectorizer=KeyphraseCountVectorizer(), stop_words=stopWords, use_mmr=True, diversity=0.2)

    this_final_keywords = []


    for i, keyword in enumerate(this_keywords):
        if keyword[0] not in initial_keywords and len(keyword[0].split()) < 5:
            initial_keywords.append(keyword[0])
            this_final_keywords.append(keyword + (source,) + (sourceTitle,))

    return sorted(this_final_keywords, key = lambda x: x[1], reverse=True)




with open('SmartStoplist.txt') as f:
    stop_words = f.read().splitlines() 

@app.route('/extract-keywords')
def main():
    seoKeywords = []
    final_keywords = []
    initial_keywords = []

    for page in google_search(str(flask_request.args.get('search_term'))):
    # for page in google_search("property management software"):
    
        text = beautifulsoup_extract_text_fallback(page.get("link"))

        keywords = {'keywords' : extract_keywords(text, stop_words, page.get("link"), page.get("title"), initial_keywords)}

        seoKeywords.append(keywords)

    for keyword in seoKeywords:
        for array_keyword in keyword.get("keywords"):
            final_keywords.append(array_keyword)



    return(sorted(final_keywords, key = lambda x: x[1], reverse=True))











    



