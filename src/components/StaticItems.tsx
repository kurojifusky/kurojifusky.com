import { BlogPages, DiscographyPages, ProjectPages } from "@/models/ParseMyAss";
import Link from "next/link";

export function ProjectItems({ items }: { items: ProjectPages }) {
	const { slug, metadata } = items;
	const { title, img, dateString, excerpt } = metadata;
	return (
		<div>
			<div>{title}</div>
			<img src={img} alt={title} />
			<div>{dateString}</div>
			<div>{excerpt}</div>
			<Link href={`/projects/${slug}`} passHref>
				<a>Read More</a>
			</Link>
		</div>
	);
}

export function AlbumItems({ items }: { items: DiscographyPages }) {
	const { slug, metadata } = items;
	const { title, albumType, length, releaseDate, year, albumArt, trackNum } =
		metadata;
	return (
		<div>
			<div>{title}</div>
			<img src={albumArt} alt={title} />
			<div>{releaseDate}</div>
			<div>{year}</div>
			<div>{albumType}</div>
			<div>{trackNum} track(s)</div>
			<Link href={`/discography/${slug}`} passHref>
				<a>Read More</a>
			</Link>
		</div>
	);
}

export function BlogItems({ items }: { items: BlogPages }) {
  const { slug, metadata } = items;
  const { title, dateString, excerpt, tags } = metadata;
  return (
		<div>
			<div>{title}</div>
			<div>{dateString}</div>
			<div>{excerpt}</div>
			<div>{tags}</div>
			<Link href={`/blog/${slug}`} passHref>
				<a>Read More</a>
			</Link>
		</div>
	);
}