# Frontend Technical Specification

- Create a static website that serves an html resume

## Resume Format Consideration

I live in Belgium and CV's in word/pdf format are suppose to include:
- foto
- date of birth
- nationality
- full address
- email address
- GSM number
- LinkedIn link
- GitHub link
- Short Profile - 2-3 sentences
- Work experience
- Education
- Hard and Soft skills

I will be using [Europass](.frontend/docs/Europass_CV.pdf) template as a basis of my resume

### Europass CV Generation

I do not know HTML, so I will let GenAI do the heavy lifting and generate out HTML and possibly CSS and from there I will manually refactor to my preferred standard.

Prompt to Cloude Sonnet 4.5
```text
Convert this CV into html format. Please do not use CSS framework. Please use the least amount of CSS tags.
```

Image provided to prompt:
![](./docs/Europass_CV_Page_1.jpg)
![](./docs/Europass_CV_Page_2.jpg)

This is [generated output](./docs/25.11.cv-html.html) which I will refactor.

## HTML Aljustments

- UTF-8 will support most languages, I plan to use English and Dutch
- Because I will be applying mobile styling to the website I'll include the viewport meta tag "width=device-width" so mobile styling scales normally.
- I will extract my styles into its own stylesheet after I am happy with my HTML markup.
- I will simplify my HTML markup css selector to be as minimal as possible.

