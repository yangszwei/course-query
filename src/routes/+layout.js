import Course from '$lib/models/course.js';

export async function load({ fetch }) {
	const res = await fetch('/courses');
	if (res.ok) {
		const data = await res.json();
		const courses = data.map((props) => new Course(props));
		return { courses };
	}
}
