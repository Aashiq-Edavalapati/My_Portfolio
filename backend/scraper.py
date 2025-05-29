import requests
import json

def scrape_leetcode(username, cookies):
    url = f"https://leetcode.com/u/{username}/"
    headers = {
        "Content-Type": "application/json",
        "x-csrftoken": cookies.get("csrftoken", ""),
        "Referer": url,
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
    }

    payload = {
        "query": """
        query getUserProfile($username: String!) {
          matchedUser(username: $username) {
            username
            profile {
              ranking
              reputation
              starRating
              userAvatar
              realName
              aboutMe
              school
              websites
              countryName
              company
              jobTitle
              skillTags
              postViewCount
              postViewCountDiff
              solutionCount
              solutionCountDiff
            }
            submitStats {
              acSubmissionNum {
                difficulty
                count
                submissions
              }
            }
          }
        }
        """,
        "variables": {"username": username}
    }

    response = requests.post("https://leetcode.com/graphql", json=payload, headers=headers, cookies=cookies)

    if response.status_code == 200:
        return response.json()
    else:
        raise Exception(f"Failed to scrape: {response.status_code}, {response.text}")

def save_data(data, filename="leetcode_data.json"):
    with open(filename, "w") as f:
        json.dump(data, f, indent=4)
