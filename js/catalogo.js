// species
function filterAllSpecies() {
    let catalog = document.getElementById('catalog');
    catalog.classList.remove('filter-species-cat');
    catalog.classList.remove('filter-species-dog');
    catalog.classList.remove('filter-species-other');
}

function filterCat() {
    let catalog = document.getElementById('catalog');
    catalog.classList.add('filter-species-cat');
    catalog.classList.remove('filter-species-dog');
    catalog.classList.remove('filter-species-other');
}

function filterDog() {
    let catalog = document.getElementById('catalog');
    catalog.classList.remove('filter-species-cat');
    catalog.classList.add('filter-species-dog');
    catalog.classList.remove('filter-species-other');
}

function filterOther() {
    let catalog = document.getElementById('catalog');
    catalog.classList.remove('filter-species-cat');
    catalog.classList.remove('filter-species-dog');
    catalog.classList.add('filter-species-other');
}

// age
function filterAllAge() {
    let catalog = document.getElementById('catalog');
    catalog.classList.remove('filter-age-2months');
    catalog.classList.remove('filter-age-3months');
    catalog.classList.remove('filter-age-15months');
    catalog.classList.remove('filter-age-18months');
}

function filter2Months() {
    let catalog = document.getElementById('catalog');
    catalog.classList.add('filter-age-2months');
    catalog.classList.remove('filter-age-3months');
    catalog.classList.remove('filter-age-15months');
    catalog.classList.remove('filter-age-18months');
}

function filter3Months() {
    let catalog = document.getElementById('catalog');
    catalog.classList.remove('filter-age-2months');
    catalog.classList.add('filter-age-3months');
    catalog.classList.remove('filter-age-15months');
    catalog.classList.remove('filter-age-18months');
}

function filter15Months() {
    let catalog = document.getElementById('catalog');
    catalog.classList.remove('filter-age-2months');
    catalog.classList.remove('filter-age-3months');
    catalog.classList.add('filter-age-15months');
    catalog.classList.remove('filter-age-18months');
}

function filter18Months() {
    let catalog = document.getElementById('catalog');
    catalog.classList.remove('filter-age-2months');
    catalog.classList.remove('filter-age-3months');
    catalog.classList.remove('filter-age-15months');
    catalog.classList.add('filter-age-18months');
}

// sex
function filterAllSex() {
    let catalog = document.getElementById('catalog');
    catalog.classList.remove('filter-sex-male');
    catalog.classList.remove('filter-sex-female');
}

function filterMale() {
    let catalog = document.getElementById('catalog');
    catalog.classList.add('filter-sex-male');
    catalog.classList.remove('filter-sex-female');
}

function filterFemale() {
    let catalog = document.getElementById('catalog');
    catalog.classList.remove('filter-sex-male');
    catalog.classList.add('filter-sex-female');
}