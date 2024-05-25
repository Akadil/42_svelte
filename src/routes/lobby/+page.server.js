import { user } from "../../stores/user";

export function load() {
    return {
        user: user
    }
}