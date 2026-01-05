// Featured projects
const projects = [
    {
        id: 'basitune',
        logo: 'basitune-icon.png',
        name: 'Basitune',
        description: 'A lightweight, cross-platform desktop wrapper for YouTube Music built with Tauri and Rust.',
        details: 'Minimal desktop application with Discord Rich Presence, AI-powered artist info and lyrics sidebar, persistent login, and content caching. Uses system webview instead of bundling Chromium for minimal resource usage.',
        github: 'https://github.com/basiphobe/Basitune',
        demo: 'https://basitune.com',
        tech: ['Rust', 'Tauri', 'JavaScript', 'OpenAI API', 'Discord RPC'],
        highlights: ['🎵 YouTube Music wrapper', '🤖 AI artist bios & lyrics', '💬 Discord integration']
    },
    {
        id: 'image-zoom',
        icon: '🔎',
        name: 'Image Zoom Extension',
        description: 'A powerful browser extension that enhances your image viewing experience with smooth zooming, panning, and keyboard controls.',
        details: 'Perfect for designers, researchers, and anyone who needs to inspect images in detail. Features include customizable zoom levels, drag-to-pan, and works on any webpage.',
        github: 'https://github.com/basiphobe/image-zoom-extension',
        firefox: 'https://addons.mozilla.org/en-US/firefox/addon/image-zoom/',
        privacy: '/privacy-image-zoom.html',
        tech: ['JavaScript', 'Browser Extension', 'WebExtensions API'],
        highlights: ['🔍 Smooth zoom controls', '🖱️ Drag to pan', '⌨️ Keyboard shortcuts']
    },
    {
        id: 'beatblink',
        icon: '🎵',
        name: 'BeatBlink',
        description: 'Real-time audio visualization that transforms your music into mesmerizing visual patterns.',
        details: 'Turn any audio input into a dynamic visual experience. Great for live performances, streaming backgrounds, or just enjoying your music in a new way. Features real-time FFT analysis and customizable visual effects.',
        github: 'https://github.com/basiphobe/BeatBlink',
        demo: 'https://beatblink.app',
        tech: ['Audio Processing', 'WebGL', 'Real-time Visualization'],
        highlights: ['🎵 Live audio analysis', '🌈 Multiple visualizer modes', '⚡ GPU-accelerated']
    },
    {
        id: 'sci-assistant',
        icon: '🧪',
        name: 'Sci-Assistant',
        description: 'AI-powered research assistant designed to help scientists and researchers navigate academic literature and analyze scientific data.',
        details: 'Leverages large language models fine-tuned on scientific literature to provide accurate, context-aware assistance. Ideal for researchers who need to quickly understand complex papers, generate hypotheses, or get explanations of scientific concepts.',
        github: 'https://github.com/basiphobe/sci-assist',
        huggingface: 'https://huggingface.co/basiphobe/sci-assistant',
        tech: ['Python', 'Transformers', 'Hugging Face', 'NLP'],
        highlights: ['🧬 Scientific domain expertise', '📚 Literature analysis', '🤖 LLM fine-tuned']
    },
    {
        id: 'basify',
        icon: '🎨',
        name: 'Basify',
        description: 'A comprehensive collection of custom nodes for ComfyUI providing workflow automation, AI integration, and advanced utilities.',
        details: 'Extends ComfyUI with 9 powerful custom nodes:<br><br><strong>Nodes:</strong><br>• <a href="https://github.com/basiphobe/basify/blob/main/py/docs/LLM_DESCRIBE_README.md" target="_blank" rel="noopener noreferrer">Describe Image (LLM)</a><br>• <a href="https://github.com/basiphobe/basify/blob/main/py/docs/DIRECTORY_AUTO_ITERATOR_README.md" target="_blank" rel="noopener noreferrer">Directory Auto Iterator</a><br>• <a href="https://github.com/basiphobe/basify/blob/main/py/docs/DIRECTORY_CHECKPOINT_SCANNER_README.md" target="_blank" rel="noopener noreferrer">Directory Checkpoint Scanner</a><br>• <a href="https://github.com/basiphobe/basify/blob/main/py/docs/DISPLAY_ANYTHING_README.md" target="_blank" rel="noopener noreferrer">Display Anything as Text</a><br>• <a href="https://github.com/basiphobe/basify/blob/main/py/docs/LATENT_GENERATOR_README.md" target="_blank" rel="noopener noreferrer">Latent Generator</a><br>• <a href="https://github.com/basiphobe/basify/blob/main/py/docs/METADATA_VIEWER_README.md" target="_blank" rel="noopener noreferrer">Metadata Viewer</a><br>• <a href="https://github.com/basiphobe/basify/blob/main/py/docs/SAVE_IMAGE_README.md" target="_blank" rel="noopener noreferrer">Save Image (Enhanced)</a><br>• <a href="https://github.com/basiphobe/basify/blob/main/py/docs/SOUND_NOTIFIER_README.md" target="_blank" rel="noopener noreferrer">Sound Notifier</a><br>• <a href="https://github.com/basiphobe/basify/blob/main/py/docs/WILDCARD_PROCESSOR_README.md" target="_blank" rel="noopener noreferrer">Wildcard Processor</a><br><br><strong>Features:</strong> Batch processing • LLM-powered image description via Ollama • Intelligent checkpoint scanning with symbolic link support • Wildcard-based text variation • Universal debugging and inspection • Enhanced image saving with metadata embedding',
        github: 'https://github.com/basiphobe/basify',
        tech: ['Python', 'ComfyUI', 'Ollama', 'PyTorch', 'PIL'],
        highlights: ['🔄 Automated workflows', '🤖 AI integration', '🎨 Dynamic content', '💾 Enhanced I/O']
    }
];

// Create project card HTML
function createProjectCard(project) {
    const iconHtml = project.logo 
        ? `<img src="${project.logo}" alt="${project.name} logo" class="project-logo">` 
        : project.icon;
    return `
        <div class="project-card" id="${project.id}">
            <div class="project-icon">${iconHtml}</div>
            <div class="project-content">
                <h3>${project.name}</h3>
                <p class="description">${project.description}</p>
                <p class="details">${project.details}</p>
                <div class="highlights">
                    ${project.highlights.map(h => `<span class="highlight">${h}</span>`).join('')}
                </div>
                <div class="project-footer">
                    <div class="project-links">
                        ${project.demo ? `
                            <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                                🚀 Live Demo
                            </a>
                        ` : ''}
                        ${project.firefox ? `
                            <a href="${project.firefox}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                                🦊 Firefox Add-on
                            </a>
                        ` : ''}
                        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn ${project.demo || project.firefox ? 'btn-secondary' : 'btn-primary'}">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                            GitHub
                        </a>
                        ${project.huggingface ? `
                            <a href="${project.huggingface}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
                                🤗 Hugging Face
                            </a>
                        ` : ''}
                        ${project.privacy ? `
                            <a href="${project.privacy}" class="btn btn-secondary">
                                🔒 Privacy Policy
                            </a>
                        ` : ''}
                    </div>
                    <div class="project-tech">
                        ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Load projects when page loads
document.addEventListener('DOMContentLoaded', () => {
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = projects.map(createProjectCard).join('');
});
