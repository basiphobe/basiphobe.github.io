// GitHub API configuration
const GITHUB_USERNAME = 'basiphobe';
const GITHUB_API = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

// Language colors (common languages)
const languageColors = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    Python: '#3572A5',
    Java: '#b07219',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Ruby: '#701516',
    Go: '#00ADD8',
    Rust: '#dea584',
    PHP: '#4F5D95',
    C: '#555555',
    'C++': '#f34b7d',
    'C#': '#178600',
    Swift: '#ffac45',
    Kotlin: '#A97BFF',
    Shell: '#89e051',
    Vue: '#41b883',
    Svelte: '#ff3e00',
};

// Fetch and display repositories
async function fetchProjects() {
    const projectList = document.getElementById('project-list');
    
    try {
        const response = await fetch(GITHUB_API + '?sort=updated&per_page=100');
        
        if (!response.ok) {
            throw new Error(`GitHub API returned ${response.status}`);
        }
        
        const repos = await response.json();
        
        // Filter out forks and private repos, sort by stars
        const publicRepos = repos
            .filter(repo => !repo.fork && !repo.private)
            .sort((a, b) => b.stargazers_count - a.stargazers_count);
        
        if (publicRepos.length === 0) {
            projectList.innerHTML = '<div class="loading">No public projects found.</div>';
            return;
        }
        
        projectList.innerHTML = publicRepos.map(repo => createProjectCard(repo)).join('');
        
    } catch (error) {
        console.error('Error fetching projects:', error);
        projectList.innerHTML = `
            <div class="error">
                Failed to load projects. Please try again later or visit 
                <a href="https://github.com/${GITHUB_USERNAME}" target="_blank">GitHub profile</a> directly.
            </div>
        `;
    }
}

// Create project card HTML
function createProjectCard(repo) {
    const description = repo.description || 'No description provided';
    const language = repo.language || 'Unknown';
    const languageColor = languageColors[language] || '#ccc';
    const topics = repo.topics || [];
    
    return `
        <div class="project-card">
            <h3><a href="${repo.html_url}" target="_blank" rel="noopener noreferrer">${repo.name}</a></h3>
            <p class="description">${escapeHtml(description)}</p>
            <div class="project-meta">
                <span class="language">
                    <span class="language-color" style="background-color: ${languageColor}"></span>
                    ${escapeHtml(language)}
                </span>
                ${repo.stargazers_count > 0 ? `<span class="stars">⭐ ${repo.stargazers_count}</span>` : ''}
                ${repo.forks_count > 0 ? `<span class="forks">🔱 ${repo.forks_count}</span>` : ''}
            </div>
            ${topics.length > 0 ? `
                <div class="project-topics">
                    ${topics.map(topic => `<span class="topic">${escapeHtml(topic)}</span>`).join('')}
                </div>
            ` : ''}
        </div>
    `;
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Load projects when page loads
document.addEventListener('DOMContentLoaded', fetchProjects);
