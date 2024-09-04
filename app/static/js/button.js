function toggleDropdown(contentId, iconId) {
    const dropdownContent = document.getElementById(contentId);
    const dropdownIcon = document.getElementById(iconId);
    
    // Toggle visibility of the dropdown content
    const isHidden = dropdownContent.classList.contains('hidden');
    dropdownContent.classList.toggle('hidden', !isHidden);
    
    // Update icon based on dropdown visibility
    dropdownIcon.classList.toggle('fa-angle-down', !isHidden);
    dropdownIcon.classList.toggle('fa-angle-up', isHidden);
    
    // Adjust the layout to accommodate the dropdown
    adjustLayout();
}

function adjustLayout() {
    const lanes = document.querySelectorAll('.flex.flex-col');

    lanes.forEach(lane => {
        const dropdownContent = lane.querySelector('.dropdown-content');
        if (dropdownContent) {
            if (dropdownContent.classList.contains('hidden')) {
                lane.style.height = '8rem'; // Reset height if dropdown is hidden
            } else {
                // Set the height to accommodate the dropdown
                lane.style.height = `calc(${lane.scrollHeight}px + ${dropdownContent.offsetHeight}px)`;
            }
        }
    });
}
