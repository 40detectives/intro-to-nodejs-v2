#! /usr/bin/env node
import fetch from 'node-fetch';
import open from 'open';
import yargs from 'yargs';

const {argv} = yargs(process.argv);

const response = await fetch('https://reddit.com/.json');
const {data} = await response.json();

const {children} = data;
const randomPost = children[Math.floor(Math.random() * children.length)];
const link = `https://reddit.com${randomPost.data.permalink}`;

if (argv.print) {
    console.log(`
        subreddit: ${randomPost.data.subreddit_name_prefixed}
        title: ${randomPost.data.title}
        link: ${link}
    `);
} else {
    open(link);
}