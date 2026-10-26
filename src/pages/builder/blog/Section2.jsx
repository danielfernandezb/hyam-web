import React from 'react';
import BlockBlogList from '@/components/builder/blocks/BlockBlogList';
import blogData from '@/pages/builder/shared/blogData';

export default function Section2() {
	return (
		<BlockBlogList
			blockId={"wAtIQR"}
			blockClassName={"block block--blog-list transition transition--slide transition--root-hidden"}
			style={{
				"--cols": 10,
				"--rows": 10,
				"--row-gap": "16px",
				"--row-size": "48px",
				"--block-padding-top": "24px",
				"--block-padding": "24px",
				"--block-padding-right": "24px",
				"--block-padding-bottom": "24px",
				"--block-padding-left": "24px",
				"--content-width": "1224px",
				"--grid-gap-size": "80px",
				"--m-grid-gap-size": "24px",
				"--cover-object-fit": "contain",
				backgroundColor: "rgb(56, 189, 248)"
			}}
			settings={{
				shownItems: {
					authorFullName: false,
					coverImage: true,
					title: true,
					description: false,
					date: true,
					categories: false,
					avatar: true,
					minutesToRead: true
				},
				categories: [],
				showAllPosts: true,
				showWithoutCategories: true,
				postsPerPage: 4,
				postColumnCount: 2,
				blogTitleFontSize: 24
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
