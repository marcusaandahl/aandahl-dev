"use server"

import {kv} from "@vercel/kv";

export async function kvf() {
    const has = await kv.exists("key") == 1
    if (has) {
        await kv.del("key")
        return "DELETED"
    } else {
        await kv.set("key", "value")
        return "ADDED"
    }
}

export async function flushCache() {
    await kv.flushall()
}