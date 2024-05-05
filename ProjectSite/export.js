document.addEventListener('DOMContentLoaded', function () {
    // Load character information from localStorage if available
    var characterInfo = JSON.parse(localStorage.getItem('characterInfo')) || {};

    // Function to update characterInfo object and localStorage
    function updateCharacterInfo() {
        characterInfo = {
            name: document.getElementById('name').value,
            class: document.getElementById('class').value,
            race: document.getElementById('race').value,
            level: document.getElementById('level').value,
            walkingDistance: document.getElementById('walking-distance').value,
            inspiration: document.getElementById('inspiration').value,
            armorClass: document.getElementById('armor-class').value,
            currentHitPoints: document.getElementById('current-hit-points').value,
            maxHitPoints: document.getElementById('max-hit-points').value,
            strength: document.getElementById('Strength').value,
            dexterity: document.getElementById('Dexterity').value,
            constitution: document.getElementById('Constitution').value,
            intelligence: document.getElementById('Intelligence').value,
            wisdom: document.getElementById('Wisdom').value,
            charisma: document.getElementById('Charisma').value,
            acrobatics: document.getElementById('Acrobatics').value,
            animalHandling: document.getElementById('AnimalHandling').value,
            arcana: document.getElementById('Arcana').value,
            athletics: document.getElementById('Athletics').value,
            deception: document.getElementById('Deception').value,
            history: document.getElementById('History').value,
            insight: document.getElementById('Insight').value,
            intimidation: document.getElementById('Intimidation').value,
            investigation: document.getElementById('Investigation').value,
            medicine: document.getElementById('Medicine').value,
            nature: document.getElementById('Nature').value,
            perception: document.getElementById('Perception').value,
            performance: document.getElementById('Performance').value,
            persuasion: document.getElementById('Persuasion').value,
            religion: document.getElementById('Religion').value,
            sleight: document.getElementById('Sleight').value,
            stealth: document.getElementById('Stealth').value,
            survival: document.getElementById('Survival').value,
            inventory: document.querySelector('.information textarea:nth-of-type(1)').value,
            featuresAndTraits: document.querySelector('.information textarea:nth-of-type(2)').value,
            notes: document.querySelector('.information textarea:nth-of-type(3)').value,
            background: document.querySelector('.background textarea').value
        };

        localStorage.setItem('characterInfo', JSON.stringify(characterInfo));
    }

    // Load character information into form fields
    document.getElementById('name').value = characterInfo.name || '';
    document.getElementById('class').value = characterInfo.class || '';
    document.getElementById('race').value = characterInfo.race || '';
    document.getElementById('level').value = characterInfo.level || '';
    document.getElementById('walking-distance').value = characterInfo.walkingDistance || '';
    document.getElementById('inspiration').value = characterInfo.inspiration || '';
    document.getElementById('armor-class').value = characterInfo.armorClass || '';
    document.getElementById('current-hit-points').value = characterInfo.currentHitPoints || '';
    document.getElementById('max-hit-points').value = characterInfo.maxHitPoints || '';
    document.getElementById('Strength').value = characterInfo.strength || '';
    document.getElementById('Dexterity').value = characterInfo.dexterity || '';
    document.getElementById('Constitution').value = characterInfo.constitution || '';
    document.getElementById('Intelligence').value = characterInfo.intelligence || '';
    document.getElementById('Wisdom').value = characterInfo.wisdom || '';
    document.getElementById('Charisma').value = characterInfo.charisma || '';
    document.getElementById('Acrobatics').value = characterInfo.acrobatics || '';
    document.getElementById('AnimalHandling').value = characterInfo.animalHandling || '';
    document.getElementById('Arcana').value = characterInfo.arcana || '';
    document.getElementById('Athletics').value = characterInfo.athletics || '';
    document.getElementById('Deception').value = characterInfo.deception || '';
    document.getElementById('History').value = characterInfo.history || '';
    document.getElementById('Insight').value = characterInfo.insight || '';
    document.getElementById('Intimidation').value = characterInfo.intimidation || '';
    document.getElementById('Investigation').value = characterInfo.investigation || '';
    document.getElementById('Medicine').value = characterInfo.medicine || '';
    document.getElementById('Nature').value = characterInfo.nature || '';
    document.getElementById('Perception').value = characterInfo.perception || '';
    document.getElementById('Performance').value = characterInfo.performance || '';
    document.getElementById('Persuasion').value = characterInfo.persuasion || '';
    document.getElementById('Religion').value = characterInfo.religion || '';
    document.getElementById('Sleight').value = characterInfo.sleight || '';
    document.getElementById('Stealth').value = characterInfo.stealth || '';
    document.getElementById('Survival').value = characterInfo.survival || '';
    document.querySelector('.information textarea:nth-of-type(1)').value = characterInfo.inventory || '';
    document.querySelector('.information textarea:nth-of-type(2)').value = characterInfo.featuresAndTraits || '';
    document.querySelector('.information textarea:nth-of-type(3)').value = characterInfo.notes || '';
    document.querySelector('.background textarea').value = characterInfo.background || '';

    // Update characterInfo object and localStorage when any input changes
    document.querySelectorAll('input, textarea').forEach(function (element) {
        element.addEventListener('input', updateCharacterInfo);
    });

    // Export character sheet
    document.getElementById('exportButton').addEventListener('click', function () {
        updateCharacterInfo(); // Update characterInfo object before exporting

        var characterJSON = JSON.stringify(characterInfo);

        var blob = new Blob([characterJSON], { type: 'application/json' });

        var a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'character_sheet.json';

        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
});

