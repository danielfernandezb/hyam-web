import React from 'react';
import BlockBlogList from '@/components/builder/blocks/BlockBlogList';
import blogData from '@/pages/builder/shared/blogData';

export default function Section3() {
	return (
		<BlockBlogList
			blockId={"ma7yPW"}
			blockClassName={"block block--blog-list transition transition--slide transition--root-hidden"}
			style={{
				"--cols": 10,
				"--rows": 10,
				"--row-gap": "16px",
				"--row-size": "48px",
				"--block-padding-top": "64px",
				"--block-padding": "64px",
				"--block-padding-right": "64px",
				"--block-padding-bottom": "64px",
				"--block-padding-left": "64px",
				"--content-width": "1224px",
				"--grid-gap-size": "32px",
				"--m-grid-gap-size": "40px",
				"--cover-object-fit": "contain",
				"--blog-post-header-text-color": "rgb(0, 0, 0)",
				backgroundColor: "rgb(56, 189, 248)"
			}}
			settings={{
				shownItems: {
					authorFullName: true,
					coverImage: true,
					title: true,
					description: true,
					date: true,
					categories: true,
					avatar: true,
					minutesToRead: true
				},
				categories: [],
				showAllPosts: true,
				showWithoutCategories: true,
				postsPerPage: 6,
				postColumnCount: 2,
				blogTitleFontSize: 22
			}}
			blogSearch={{
				isEnabled: false
			}}
			posts={blogData.posts}
			blogCategories={blogData.categories}
			blogReadingTimeText={blogData.readingTimeText}
			background={{
				color: "rgb(56, 189, 248)",
				current: "color"
			}}
		/>
	);
}
