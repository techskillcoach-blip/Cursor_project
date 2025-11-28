# Be10X AI Tools Workshop Landing Page

A modern, responsive landing page for the Be10X AI Tools Workshop, designed to convert visitors into workshop attendees.

## Features

- ✨ Modern, beautiful UI with gradient backgrounds
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⏱️ Live countdown timer for bonus deadline
- 📋 Interactive FAQ accordion
- 🌟 Smooth scroll animations
- 🎯 Multiple call-to-action buttons
- ⭐ Testimonials section
- 👨‍🏫 Mentor profiles
- 📊 Statistics and benefits sections

## Files Structure

```
├── index.html      # Main HTML structure
├── styles.css      # All styling and responsive design
├── script.js       # Interactive features and animations
└── README.md       # This file
```

## Getting Started

1. Open `index.html` in your web browser
2. Or, if you have a local server, you can run:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (with http-server)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

3. Navigate to `http://localhost:8000` in your browser

## Customization

### Update Countdown Timer
Edit the target date in `script.js`:
```javascript
const targetDate = new Date('2025-11-26T23:59:59').getTime();
```

### Change Colors
Modify the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #f59e0b;
    /* ... other variables */
}
```

### Update CTA Button Links
In `script.js`, update the click handler:
```javascript
button.addEventListener('click', () => {
    window.location.href = 'YOUR_REGISTRATION_URL';
});
```

## Sections Included

1. **Hero Section** - Main title, benefits, pricing
2. **Bonuses Section** - Three bonus offers with countdown
3. **Statistics Section** - Job loss predictions
4. **Features Section** - Why join the course
5. **Workshop Topics** - What you'll learn
6. **Testimonials** - Customer reviews
7. **Mentors Section** - Instructor profiles
8. **FAQ Section** - Frequently asked questions
9. **Final CTA** - Final call to action
10. **Footer** - Copyright and notes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- The countdown timer automatically calculates time remaining until November 26, 2025
- FAQ items can be clicked to expand/collapse
- All prices and dates can be easily updated in the HTML
- The design uses modern CSS features (CSS Grid, Flexbox, Gradients)

## License

Free to use and modify for your purposes.





