""" Configuration script for tests purposes """

import random
import string

SECRET_KEY = "".join([random.choice(string.printable) for _ in range(24)])

JS_KEY = "AIzaSyDa-9vsMS7NTWKdnwBbkCARaW010QD9YmM"

GEO_KEY = "AIzaSyDa-9vsMS7NTWKdnwBbkCARaW010QD9YmM"

URL = "http://localhost:5000/"


DEBUG = True
TESTING = True
LIVESERVER_PORT = 5000
LIVESERVER_TIMEOUT = 10
