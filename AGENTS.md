# AGENTS.md

## Build Commands
Static HTML/CSS/JS portfolio - no build system required.
- **Validation**: HTML5/CSS3 validators for code quality
- **Testing**: Manual browser testing across viewports
- **Linting**: Follow existing code patterns

## Code Style Guidelines

### HTML Structure
- Semantic HTML5 elements (header, main, aside, section, footer)
- Proper heading hierarchy (h1 > h2 > h3 > h4)
- Alt text for images, relative paths for assets

### CSS Architecture
- BEM-like naming (.card__box-shadow, .nav__burger)
- CSS custom properties in :root
- Mobile-first responsive design
- Numbered sections organization
- Flexbox/grid layouts

### JavaScript Patterns
- ES6+ syntax (arrow functions, const/let)
- DOMContentLoaded initialization
- Spanish variable names (botonSubir, navItems)
- Event delegation, smooth scrolling
- Intersection observers for animations

### File Organization
- Separate concerns: html/, css/, js/, img/, svg/, fonts/
- Kebab-case file names
- SVG files in dedicated directory

### Performance
- Optimize images (WebP preferred)
- Use defer for non-critical JS
- Lazy loading for below-fold content
- Minimize HTTP requests