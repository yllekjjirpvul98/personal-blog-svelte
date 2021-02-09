import grayMatter from "gray-matter";
import marked from "marked";
import path from "path";
import fs from "fs";
import hljs from "highlight.js";

const getPost = (fileName) => {
	return fs.readFileSync(
	  path.resolve("content/", `${fileName}.md`),
	  "utf-8"
	);
};

export function get(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { slug } = req.params;

	const post = getPost(slug);
	const renderer = new marked.Renderer();
	// add highlight to code
	renderer.code = (source, lang) => { const { value: highlighted } = hljs.highlight(lang, source); return `<pre class='language-javascriptreact'><code>${highlighted}</code></pre>`; };

	const {data, content} = grayMatter(post);
	const html = marked(content, { renderer });
	console.log(data, content);

	if (html) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({ html, ...data }));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}
