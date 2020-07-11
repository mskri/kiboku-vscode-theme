export const typeDefs = gql`
	scalar GraphQLDateTime

	type TextBlock {
		text: String!
		type: String!
	}

	type ImageBlock {
		id: String!
		alt: String!
		url: String!
	}

	type VideoBlock {
		id: String!
		url: String!
	}

	type GalleryBlock {
		id: String!
		images: [ImageBlock!]!
		vidoes: [VideoBlock]
	}

	type AudioBlock {
		id: String!
		author: Author!
		length: Int!
	}

	type Author {
		name: String!
		alive: Boolean!
		born: GraphQLDateTime!
	}

	type FamousAuthor implements Author {
		achievement: String!
	}

	union ContentBlocks =
		  TextBlock
		| ImageBlock
		| VideoBlock
		| AudioBlock
		| GalleryBlock

	enum Platform {
		ios
		android
	}

	extend type Query {
		author(url: String!): Author!
		content(id: String!): [ContentBlocks!]!
	}
`;
