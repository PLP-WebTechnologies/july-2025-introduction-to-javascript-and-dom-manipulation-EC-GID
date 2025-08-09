// Part 1: Variable declarations and conditionals
document.addEventListener('DOMContentLoaded', function() {
    // Variable declarations
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const messageTextarea = document.getElementById('message');
    const fieldSelect = document.getElementById('field');
    const submitButton = document.querySelector('button[type="submit"]');
    const hobbyList = document.querySelector('section ul');
    
    // Part 4: DOM interactions (3 examples)
    // 1. Adding dynamic content to hobbies section
    const hobbyItems = hobbyList.querySelectorAll('li');
    hobbyItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            this.style.backgroundColor = '#788a81';
            setTimeout(() => {
                this.style.backgroundColor = '';
            }, 1000);
        });
    });
    
    // 2. Creating and adding a new element to the page
    const academicSection = document.querySelector('section:nth-of-type(2)');
    const infoBox = document.createElement('div');
    infoBox.textContent = '🎓 Currently pursuing advanced studies in Forestry Genetics';
    infoBox.style.backgroundColor = '#069f7b';
    infoBox.style.padding = '10px';
    infoBox.style.borderRadius = '4px';
    infoBox.style.margin = '15px 0';
    academicSection.insertBefore(infoBox, academicSection.firstChild);
    
    // 3. Modifying existing elements
    const header = document.querySelector('header');
    header.style.position = 'relative';
    const dateDisplay = document.createElement('div');
    dateDisplay.id = 'date-display';
    dateDisplay.style.fontSize = '0.9em';
    dateDisplay.style.marginTop = '10px';
    header.appendChild(dateDisplay);
    
    // Part 2: Custom functions
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function updateDateDisplay() {
        const now = new Date();
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        document.getElementById('date-display').textContent = 
            now.toLocaleDateString('en-US', options);
    }
    
    // Part 3: Loop examples
    // Loop 1: Highlight odd-numbered list items in daily routine
    const routineItems = document.querySelectorAll('section ol li');
    for (let i = 0; i < routineItems.length; i++) {
        if (i % 2 === 0) { // 0-based index, so even indices are odd items
            routineItems[i].style.backgroundColor = '#788a81';
        }
    }
    
    // Loop 2: Add data attributes to table rows
    const tableRows = document.querySelectorAll('tbody tr');
    let rowIndex = 1;
    for (const row of tableRows) {
        row.setAttribute('data-row-index', rowIndex);
        rowIndex++;
    }
    
    // Part 1: Conditionals in action
    emailInput.addEventListener('blur', function() {
        if (!validateEmail(this.value) && this.value !== '') {
            this.style.borderColor = '#e53e3e';
            this.nextElementSibling.textContent = 'Please enter a valid email';
            this.nextElementSibling.style.color = '#e53e3e';
        } else {
            this.style.borderColor = '#94a3b8';
            if (this.nextElementSibling) {
                this.nextElementSibling.textContent = '';
            }
        }
    });
    
    // Part 2: Another custom function
    function showFieldDescription() {
        const descriptions = {
            'forestry': 'Research in sustainable forest management',
            'genetics': 'Studies in tree breeding and genetics',
            'remote-sensing': 'Satellite and aerial data analysis',
            'data-analysis': 'Statistical modeling and data processing',
            'education': 'Development of learning platforms'
        };
        
        const description = descriptions[fieldSelect.value] || 'Select a field to see description';
        let descElement = document.getElementById('field-description');
        
        if (!descElement) {
            descElement = document.createElement('div');
            descElement.id = 'field-description';
            descElement.style.fontSize = '0.9em';
            descElement.style.marginTop = '5px';
            descElement.style.fontStyle = 'italic';
            fieldSelect.parentNode.insertBefore(descElement, fieldSelect.nextSibling);
        }
        
        descElement.textContent = description;
    }
    
    // Event listeners using custom functions
    fieldSelect.addEventListener('change', showFieldDescription);
    
    // Form submission handling
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Part 1: More conditionals
        if (!validateEmail(emailInput.value)) {
            alert('Please enter a valid email address');
            return;
        }
        
        if (messageTextarea.value.length < 20) {
            alert('Please provide more details in your message (at least 20 characters)');
            return;
        }
        
        // Part 4: Additional DOM interaction - form feedback
        submitButton.disabled = true;
        submitButton.textContent = 'Processing...';
        
        setTimeout(() => {
            alert('Thank you for your collaboration request! We will contact you soon.');
            form.reset();
            submitButton.disabled = false;
            submitButton.textContent = 'Submit Request';
            
            // Remove field description
            const descElement = document.getElementById('field-description');
            if (descElement) descElement.remove();
        }, 1500);
    });
    
    // Initialize date display
    updateDateDisplay();
    setInterval(updateDateDisplay, 60000); // Update every minute
});