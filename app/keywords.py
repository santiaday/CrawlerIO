import spacy
import gensim
import gensim.downloader as api
from gensim import corpora, models, similarities
from gensim.test.utils import get_tmpfile, datapath
from gensim.models import KeyedVectors
from rich import print
import typing
from collections import Counter
from string import punctuation

nlp = spacy.load("en_core_web_sm")

##
# To be used later, commented out because it slows down code: 
##

#Get gensim semantic similarity word vector model
# word_vectors = api.load("glove-wiki-gigaword-100")
# fname = get_tmpfile("vectors.kv")
# word_vectors.save(fname)
# word_vectors = KeyedVectors.load(fname, mmap='r')
# wv_from_text = KeyedVectors.load_word2vec_format(datapath('word2vec_pre_kv_c'), binary=False)  # C text format
# wv_from_bin = KeyedVectors.load_word2vec_format(datapath("euclidean_vectors.bin"), binary=True)  # C bin format


def getKeywords(text: str) -> list:
    result = []
    pos_tag = ['PROPN', 'ADJ', 'NOUN'] 
    doc = nlp(text.lower()) 
    for token in doc:
        if(token.text in nlp.Defaults.stop_words or token.text in punctuation):
            continue
        if(token.pos_ in pos_tag):
            result.append(token.text)
                
    return result


#EX: getting keywords from news article
#https://www.nbcnews.com/news/world/russia-iranian-kamikaze-drones-ukraine-rcna50977

print(getKeywords("Ukraine is accusing Russia of striking deep inside its territory with what it says are Iranian-made “kamikaze” drones as Moscow’s troops are facing mounting setbacks on the battlefield. Ukrainian officials said Wednesday that Russia used drones “of the Shahed-136 type” to target the town of Bila Tserkva, just 50 miles south of Kyiv, injuring one person and destroying several buildings. Ukraine has been sounding the alarm about Russia’s increasing use of drones, which it says are being supplied by Tehran, to hit cities far behind the front lines for weeks, but Wednesday’s attack is the closest to the country’s capital and poses a new challenge to the Ukrainian military. "))