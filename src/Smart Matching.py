import nltk
from nltk.corpus import stopwords
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Sample user profiles and project descriptions
user_profiles = [
    "I'm a Python developer with expertise in web development and Django.",
    "Experienced in data analysis using Python, especially with pandas and numpy.",
    "Passionate about machine learning and deep learning, with a focus on natural language processing (NLP)."
]

projects = [
    "Open-source project looking for Python developers to work on web development using Django.",
    "Data analytics project seeking contributors proficient in Python, pandas, and numpy.",
    "Machine learning project aiming to improve NLP models and text classification algorithms."
]

# Preprocess text data
nltk.download('stopwords')
stop_words = set(stopwords.words('english'))

def preprocess(text):
    words = nltk.word_tokenize(text)
    words = [word.lower() for word in words if word.isalnum()]
    words = [word for word in words if word not in stop_words]
    return ' '.join(words)

user_profiles = [preprocess(profile) for profile in user_profiles]
projects = [preprocess(project) for project in projects]

# Vectorize user profiles and projects
vectorizer = TfidfVectorizer()
user_profile_vectors = vectorizer.fit_transform(user_profiles)
project_vectors = vectorizer.transform(projects)

# Calculate cosine similarity between user profiles and projects
cosine_similarities = cosine_similarity(user_profile_vectors, project_vectors)

# Match users to projects based on highest cosine similarity
for i, user_profile in enumerate(user_profiles):
    best_match_index = cosine_similarities[i].argmax()
    best_match_project = projects[best_match_index]
    
    print(f"User Profile {i + 1}:\n{user_profile}")
    print(f"Best Matched Project:\n{best_match_project}")
    print("="*40)
