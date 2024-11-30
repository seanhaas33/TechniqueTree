import requests
from bs4 import BeautifulSoup

# URL of the webpage to check
url = "http://example.com"

# Fetch the HTML of the webpage
response = requests.get(url)
if response.status_code == 200:
    html_content = response.text
else:
    print("Failed to fetch the webpage.")
    exit()

# Parse the HTML
soup = BeautifulSoup(html_content, "html.parser")

# Find all video elements
videos = soup.find_all("video")

if videos:
    print(f"Found {len(videos)} video(s) on the page.")
    for idx, video in enumerate(videos, start=1):
        print(f"\nVideo {idx}:")
        
        # Check for captions
        tracks = video.find_all("track", kind="captions")
        if tracks:
            print(f"  Captions available: {len(tracks)} track(s) found.")
            for track in tracks:
                print(f"    - Language: {track.get('srclang', 'unknown')}, Label: {track.get('label', 'none')}")
        else:
            print("  No captions found.")

        # Check for aria attributes
        aria_label = video.get("aria-label")
        if aria_label:
            print(f"  ARIA Label: {aria_label}")
        else:
            print("  No ARIA Label provided.")

        # Check for alternative text
        description = video.get("aria-describedby")
        if description:
            print(f"  Descriptive text available: {description}")
        else:
            print("  No descriptive text provided.")
else:
    print("No videos found on the page.")
