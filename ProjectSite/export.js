document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('exportButton').addEventListener('click', function() {

        var characterInfo = {
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

