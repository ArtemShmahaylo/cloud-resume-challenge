import json, sys, markdown

data = json.load(sys.stdin)
to_html = lambda m: markdown.markdown(m)

if isinstance(data, dict):
    if "body" in data:
        data["body_html"] = to_html(data.pop("body"))
elif isinstance(data, list):
    for item in data:
        if isinstance(item, dict) and "body" in item:
            item["body_html"] = to_html(item.pop("body"))

json.dump(data, sys.stdout, ensure_ascii=False)
