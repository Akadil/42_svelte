// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Error {}
	interface Locals {
		user: {
			username: string | null;
			id: string | null;
		};
	}
	// interface PageData {}
	// interface Platform {}
}
