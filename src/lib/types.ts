export type Item = {
	objectID: string;
	title: string;
	created_at: string;
	url: string;
	author: string;
	points: number;
	num_comments: number;
};

export type Comment = { comment_text: string; author: string; created_at: string };
