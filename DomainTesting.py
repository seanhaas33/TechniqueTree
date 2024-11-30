import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin

#check if domain is valid
def check_website_status(website):
    try:
        response = requests.get(website)
        if response.status_code == 200:
            print(f"website {website} is reachable.")
        else:
            print(f"website {website} is not reachable. Status code: {response.status_code}")
        return response.status_code
    except requests.exceptions.RequestException as e:
        print(f"Failed to reach website {website}: {e}")
        return None

#find all internal links on homepage
def find_internal_links(website):
    try:
        response = requests.get(website)
        soup = BeautifulSoup(response.text, 'html.parser')
        links = set()

        # Find all 'a' tags with href attributes
        for link in soup.find_all('a', href=True):
            url = urljoin(website, link['href'])  # Convert relative URLs to absolute
            if website in url:  # Only keep internal links
                links.add(url)
        
        print(f"Found {len(links)} internal links.")
        return links
    except requests.exceptions.RequestException as e:
        print(f"Failed to find links from {website}: {e}")
        return set()

#check status of each link
def check_pages(links):
    for link in links:
        try:
            response = requests.get(link)
            if response.status_code == 200:
                print(f"Page {link} is working.")
            else:
                print(f"Page {link} returned status code: {response.status_code}")
        except requests.exceptions.RequestException as e:
            print(f"Failed to reach page {link}: {e}")


def main():
    website = ""  

    status = check_website_status(website)

    #If website is reachable, check all internal links
    if status == 200:
        internal_links = find_internal_links(website)
        check_pages(internal_links)     



if __name__ == "__main__":
    main()
