import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';

const contentDirectory = path.join(process.cwd(), 'content');

export function getArticles() {
  try {
    const articlesDirectory = path.join(contentDirectory, 'articles');
    if (!fs.existsSync(articlesDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(articlesDirectory);

    const articles = fileNames.map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || '',
        content,
        tags: data.tags || [],
        source: data.source || null,
      };
    });

    return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error getting articles:', error);
    return [];
  }
}

export async function getArticleBySlug(slug: string) {
  try {
    const fullPath = path.join(contentDirectory, 'articles', `${slug}.md`);
    if (!fs.existsSync(fullPath)) {
      throw new Error(`Article not found: ${slug}`);
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const processedContent = await unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeHighlight)
      .use(rehypeStringify)
      .process(content);

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString(),
      content: processedContent.toString(),
      excerpt: data.excerpt || '',
      tags: data.tags || [],
      source: data.source || null,
    };
  } catch (error) {
    console.error(`Error getting article by slug (${slug}):`, error);
    return {
      slug,
      title: 'Article Not Found',
      date: new Date().toISOString(),
      content: '<p>The requested article could not be found.</p>',
      excerpt: '',
      tags: [],
      source: null,
    };
  }
}

export function getProjects() {
  try {
    const projectsPath = path.join(contentDirectory, 'projects.json');
    if (!fs.existsSync(projectsPath)) {
      return [];
    }

    const projectsData = fs.readFileSync(projectsPath, 'utf8');
    return JSON.parse(projectsData);
  } catch (error) {
    console.error('Error getting projects:', error);
    return [];
  }
}

export function getWorkExperience() {
  try {
    const experiencePath = path.join(contentDirectory, 'work-experience.json');
    if (!fs.existsSync(experiencePath)) {
      return [];
    }

    const experienceData = fs.readFileSync(experiencePath, 'utf8');
    return JSON.parse(experienceData);
  } catch (error) {
    console.error('Error getting work experience:', error);
    return [];
  }
}

export function getBookmarks() {
  try {
    const bookmarksPath = path.join(contentDirectory, 'bookmarks.json');
    if (!fs.existsSync(bookmarksPath)) {
      return [];
    }

    const bookmarksData = fs.readFileSync(bookmarksPath, 'utf8');
    return JSON.parse(bookmarksData);
  } catch (error) {
    console.error('Error getting bookmarks:', error);
    return [];
  }
}

export function getAbout() {
  try {
    const aboutPath = path.join(contentDirectory, 'about.md');
    if (!fs.existsSync(aboutPath)) {
      return 'About content coming soon.';
    }

    const fileContents = fs.readFileSync(aboutPath, 'utf8');
    const { content } = matter(fileContents);
    return content;
  } catch (error) {
    console.error('Error getting about content:', error);
    return 'Error loading about content.';
  }
} 