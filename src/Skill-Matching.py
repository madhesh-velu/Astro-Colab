import nltk
from nltk.corpus import stopwords
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Sample skill-requested repository and user profiles
repository = "Looking for Python developers experienced in Django for a web development project."

user_profiles = [
    "I'm a Python developer with expertise in web development and Django.",
    "Experienced in data analysis using Python, especially with pandas and numpy.",
    "Passionate about machine learning and deep learning, with a focus on natural language processing (NLP)."
]

# Preprocess text data
nltk.download('stopwords')
stop_words = set(stopwords.words('english'))

def preprocess(text):
    words = nltk.word_tokenize(text)
    words = [word.lower() for word in words if word.isalnum()]
    words = [word for word in words if word not in stop_words]
    return ' '.join(words)

repository = preprocess(repository)
user_profiles = [preprocess(profile) for profile in user_profiles]

# Vectorize repository and user profiles
vectorizer = TfidfVectorizer()
repository_vector = vectorizer.fit_transform([repository])
user_profile_vectors = vectorizer.transform(user_profiles)

# Calculate cosine similarity between repository and user profiles
cosine_similarities = cosine_similarity(repository_vector, user_profile_vectors)

# Match users to the repository based on highest cosine similarity
best_match_index = cosine_similarities.argmax()
best_match_user_profile = user_profiles[best_match_index]

print(f"Skill-Requested Repository:\n{repository}")
print(f"Best Matched User Profile:\n{best_match_user_profile}")
