import Perplexity from '@perplexity-ai/perplexity_ai';

const client = new Perplexity();

const search = await client.search.create({
    query: "latest AI developments 2024",
    maxResults: 5,
    maxTokensPerPage: 1024
});

for (const result of search.results) {
    console.log(`${result.title}: ${result.url}`);
}