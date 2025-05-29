from flask import Flask, jsonify, request
from scraper import scrape_leetcode, save_data

app = Flask(__name__)

COOKIES  = {
    "LEETCODE_SESSION": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfYXV0aF91c2VyX2lkIjoiMTEzMzg4MjUiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJhbGxhdXRoLmFjY291bnQuYXV0aF9iYWNrZW5kcy5BdXRoZW50aWNhdGlvbkJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJiN2VmZmM1ZmM3ODhlMTIxMjE4ODVjOTc5YzdkMDkzNjZhOTVlYzY1NDQyMjI2OGZlMmE2ZjJiZjg4MWJjOTA1Iiwic2Vzc2lvbl91dWlkIjoiNzI3NGI2MDYiLCJpZCI6MTEzMzg4MjUsImVtYWlsIjoiYWFzaGlxZWRhdmFsYXBhdGk1OEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6IkFhc2hpcV9FZGF2YWxhcGF0aSIsInVzZXJfc2x1ZyI6IkFhc2hpcV9FZGF2YWxhcGF0aSIsImF2YXRhciI6Imh0dHBzOi8vYXNzZXRzLmxlZXRjb2RlLmNvbS91c2Vycy9hdmF0YXJzL2F2YXRhcl8xNzAwMzI3MjEyLnBuZyIsInJlZnJlc2hlZF9hdCI6MTc0ODUzOTg1NiwiaXAiOiIyNy43LjEzLjk1IiwiaWRlbnRpdHkiOiIwZTAzNjllMjgxM2RiN2RlYjI2ZTU5MzdjMzUzYWFiNCIsImRldmljZV93aXRoX2lwIjpbIjc3OGYwZmM2MjE0ZDBjNjMzOTIwNDVjNTIwMTM3NDhiIiwiMjcuNy4xMy45NSJdfQ.XPBEktAsfijxqDihWXdgZaJ5vineP9zyfwhun3OY1q8",
    "csrftoken": "ir9SQDOwG4mhpaTv5tUSCkzZqViLBuzpkUD3wECUBPhAb7NHEy7ZNhcqK6QV5pL7",
    "cf_clearance": "AM_uZsLwVW154aDO.m0MNNV5XfOk.YTsk.1T1V8x3aU-1746710617-1.2.1.1-DBBI4VgYghgQnOvinU_ON84KGy6RnOQFYOglUOHS.RUfsfHa36N2dkiMU4aJ.JQiW8X_v3ikTXTnQ4BS6sryw0SMg5coORv_N6un4NIJxXqggoD039eP1PcCoeN6gDeKtOEaaqc0qdH0S7eMU3jqoBaEgbmu77BWpKHZfjplFaG6ri.aV9UQxltkrdPSBDTtM7D4zPWW6pweQyHhz2hagRju2Ix3O5t4yW6kuwH4wbjQwOdVM_goip6RBn1taDmFwlaHm5y7PGftdkI82sqD14hGqFu3X5clFBByRnz7iTUonQFj.c2.xkqwwJAP2DZB7nFyVq._nyenmndCBdPRA2ZtadSyG4XhyUrnphQ_cyf085vqui2brdck9Ud29QTk",
}

@app.route("/leetcode/<username>", methods=["GET"])
def get_leetcode_data(username):
    try:
        data = scrape_leetcode(username, COOKIES)
        save_data(data)  # save to leetcode_data.json
        return jsonify(data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
