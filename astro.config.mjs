import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
	site: 'https://njuptfreeexams.github.io',
	base: '/NJUPT-General-Free-Exams',
	vite: {
		assetsInclude: ["**/*.ppt", "**/*.pptx", "**/*.doc", "**/*.docx"]
	  },
	  integrations: [starlight({
		title: 'NJUPTFreeExams',
		defaultLocale: 'root',
		locales: {
		  root: {
			label: '简体中文',
			lang: 'zh-CN'
		  }
		},
		social: {
		  github: 'https://github.com/NJUPTFreeExams/NJUPT-General-Free-Exams'
		},
		customCss: ['./src/styles/custom.css'],
		sidebar: [
		{label: '首页', link: 'homepage'},
		{
			label: '指南', collapsed: true,
			items: [
				{label: 'UserGuide', link: '/homepage/userguide'},
				{label: 'IssueGuide', link: '/homepage/issueguide'},
				{label: 'UploadGuide', link: '/homepage/uploadguide'},
			]
	  	},
		//指向内部或外部页面的链接
		{
		  label: '计算机学院',
		  // 自动生成一个链接分组，用于 'CS' 目录。
		  autogenerate: {
			directory: 'CS'
		  }
		}, {
			label: '理学院',
			// 自动生成一个链接分组，用于 'CS' 目录。
			autogenerate: {
			  directory: 'lxy'
			}
		}, {
			label: '通信与信息工程学院',
			autogenerate: {
			  directory: 'SCIE'
			}
		}, {
			label: '经济学院',
			autogenerate: {
			  directory: 'Economics'
			}
		}, {
		  label: '集成电路科学与工程学院',
		  autogenerate: {
			directory: 'IC'
		  }
		}, {
			label: '管理学院',
			autogenerate: {
			  directory: 'Management'
			}
		}, {
			label: '马克思主义学院',
			autogenerate: {
			  directory: 'Marx'
			}
		}, {
			label: '外国语学院',
			// 自动生成一个链接分组，用于 'CS' 目录。
			autogenerate: {
			  directory: 'FLS'
			}
		}, {
			label: '教育与技术学院',
			// 自动生成一个链接分组，用于 'CS' 目录。
			autogenerate: {
			  directory: 'edu'
			}
		}, {
			label: '其他',
			autogenerate: {
			  directory: 'others'
			}
		}, {
			label: '贡献文档',
			collapsed: true,
			autogenerate: {
			  directory: 'reserve'
			}
		}, {
		  label: '👉了解 Astro',
		  link: 'https://astro.build/'
		}],
		head: [{
		  tag: 'link',
		  attrs: {
			rel: "stylesheet",
			href: 'https://fastly.jsdelivr.net/npm/katex@0.15.1/dist/katex.css',
			defer: true,
			'integrity': "sha384-WsHMgfkABRyG494OmuiNmkAOk8nhO1qE+Y6wns6v+EoNoTNxrWxYpl5ZYWFOLPCM",
			'crossorigin': "anonymous"
		  }
		}, {
		  tag: 'script',
		  attrs: {
			'is:inline': true,
			src: 'https://cdn.staticfile.org/twikoo/1.6.30/twikoo.all.min.js'
		  }
		}, {
			tag: 'script',
			attrs: {
			  'async': true,
			  src: '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'
			}
		}],
		expressiveCode: {
		  styleOverrides: {
			borderRadius: '0.5rem'
		  }
		},
		components: {
		  Footer: './src/components/Footer.astro',
		  MarkdownContent: './src/components/MarkdownContent.astro'
		},
		editLink: {
		  baseUrl: 'https://github.com/withastro/starlight/edit/main/'
		},
		lastUpdated: true
	  })],
	  markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex]
	  },
	});
