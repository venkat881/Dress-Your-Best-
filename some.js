document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const startButton = document.getElementById('startButton');
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fileInput');
    const imagePreview = document.getElementById('imagePreview');
    const uploadText = document.getElementById('uploadText');
    const analyzeButton = document.getElementById('analyzeButton');
    const styleQuestionsModal = document.getElementById('styleQuestionsModal');
    const submitStyleButton = document.getElementById('submitStyleButton');
    const resultsModal = document.getElementById('resultsModal');
    const closeResultsButton = document.getElementById('closeResultsButton');
    const colorResults = document.getElementById('colorResults');
    
    // Event listeners
    startButton.addEventListener('click', scrollToColorMatch);
    uploadArea.addEventListener('click', triggerFileInput);
    fileInput.addEventListener('change', handleFileUpload);
    analyzeButton.addEventListener('click', showStyleQuestions);
    submitStyleButton.addEventListener('click', showColorResults);
    closeResultsButton.addEventListener('click', closeResultsModal);
    
    // Functions
    function scrollToColorMatch() {
        document.getElementById('colorMatchSection').scrollIntoView({
            behavior: 'smooth'
        });
    }
    
    function triggerFileInput() {
        fileInput.click();
    }
    
    function handleFileUpload(event) {
        const file = event.target.files[0];
        if (file && file.type.match('image.*')) {
            const reader = new FileReader();
            
            reader.onload = function(e) {
                imagePreview.src = e.target.result;
                imagePreview.style.display = 'block';
                uploadText.style.display = 'none';
                analyzeButton.disabled = false;
            }
            
            reader.readAsDataURL(file);
        }
    }
    
    function showStyleQuestions() {
        styleQuestionsModal.style.display = 'flex';
    }
    
    function showColorResults() {
        styleQuestionsModal.style.display = 'none';
        resultsModal.style.display = 'flex';
        
        // Generate sample color recommendations (in a real app, this would come from an analysis)
        const paletteType = document.querySelector('input[name="palette"]:checked').value;
        const boldness = document.querySelector('input[name="boldness"]:checked').value;
        
        // Clear previous results
        colorResults.innerHTML = '';
        
        // Generate colors based on preferences
        const colors = generateColorRecommendations(paletteType, boldness);
        
        // Display color swatches
        colors.forEach(color => {
            const swatch = document.createElement('div');
            swatch.className = 'color-swatch';
            swatch.style.backgroundColor = color.hex;
            swatch.textContent = color.name;
            colorResults.appendChild(swatch);
        });
    }
    
    function closeResultsModal() {
        resultsModal.style.display = 'none';
    }
    
    function generateColorRecommendations(paletteType, boldness) {
        // This is a simplified example - a real app would use actual color analysis
        let colors = [];
        
        if (paletteType === 'warm') {
            if (boldness === 'subtle') {
                colors = [
                    { name: 'Peach', hex: '#FFDAB9' },
                    { name: 'Coral', hex: '#FF7F50' },
                    { name: 'Gold', hex: '#FFD700' },
                    { name: 'Terracotta', hex: '#E2725B' },
                    { name: 'Cream', hex: '#FFFDD0' }
                ];
            } else if (boldness === 'medium') {
                colors = [
                    { name: 'Burnt Orange', hex: '#CC5500' },
                    { name: 'Rust', hex: '#B7410E' },
                    { name: 'Amber', hex: '#FFBF00' },
                    { name: 'Brick', hex: '#CB4154' },
                    { name: 'Honey', hex: '#F5B700' }
                ];
            } else { // vibrant
                colors = [
                    { name: 'Vermilion', hex: '#E34234' },
                    { name: 'Sunset', hex: '#FD5E53' },
                    { name: 'Marigold', hex: '#EAA221' },
                    { name: 'Paprika', hex: '#8B0000' },
                    { name: 'Tangerine', hex: '#F28500' }
                ];
            }
        } else if (paletteType === 'cool') {
            if (boldness === 'subtle') {
                colors = [
                    { name: 'Lavender', hex: '#E6E6FA' },
                    { name: 'Mint', hex: '#98FF98' },
                    { name: 'Sky', hex: '#87CEEB' },
                    { name: 'Lilac', hex: '#C8A2C8' },
                    { name: 'Ice', hex: '#D4F1F9' }
                ];
            } else if (boldness === 'medium') {
                colors = [
                    { name: 'Teal', hex: '#008080' },
                    { name: 'Periwinkle', hex: '#CCCCFF' },
                    { name: 'Sage', hex: '#9DC183' },
                    { name: 'Slate', hex: '#708090' },
                    { name: 'Navy', hex: '#000080' }
                ];
            } else { // vibrant
                colors = [
                    { name: 'Royal', hex: '#4169E1' },
                    { name: 'Emerald', hex: '#50C878' },
                    { name: 'Electric', hex: '#7DF9FF' },
                    { name: 'Sapphire', hex: '#0F52BA' },
                    { name: 'Fuchsia', hex: '#FF00FF' }
                ];
            }
        } else { // neutral
            if (boldness === 'subtle') {
                colors = [
                    { name: 'Beige', hex: '#F5F5DC' },
                    { name: 'Taupe', hex: '#483C32' },
                    { name: 'Ivory', hex: '#FFFFF0' },
                    { name: 'Sand', hex: '#F4A460' },
                    { name: 'Stone', hex: '#928E85' }
                ];
            } else if (boldness === 'medium') {
                colors = [
                    { name: 'Mocha', hex: '#967969' },
                    { name: 'Charcoal', hex: '#36454F' },
                    { name: 'Khaki', hex: '#C3B091' },
                    { name: 'Pewter', hex: '#899499' },
                    { name: 'Camel', hex: '#C19A6B' }
                ];
            } else { // vibrant
                colors = [
                    { name: 'Onyx', hex: '#353839' },
                    { name: 'Cocoa', hex: '#D2691E' },
                    { name: 'Graphite', hex: '#251607' },
                    { name: 'Umber', hex: '#635147' },
                    { name: 'Espresso', hex: '#4E3D28' }
                ];
            }
        }
        
        return colors;
    }
});