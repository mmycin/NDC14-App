import GetUrls from "$lib/Utils/Data";
import { writable } from "svelte/store";

const URL = GetUrls();

export const BASE_URL = writable(URL);