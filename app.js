const propertyData = {
    mulberi: {
        id: "mulberi",
        name: "Mulberi Residences",
        developer: "Mawar Awal (M) Sdn Bhd",
        tenure: "Freehold",
        density: "Low Density (284 units)",
        maintenance: "RM 0.33/sf (Estimated)",
        transit: "MRT Kepong Baru / Jinjang / KTM Segambut (~2.5km, feeder bus T115)",
        transitColor: "blue",
        transitDistance: "~2.5km (Feeder Bus T115 to MRT)",
        benefits: [
            "0% Downpayment (Full Loan)",
            "Extra loan up to RM 60k for renovation (monthly +RM 250 approx.)",
            "Free SPA & Loan Legal Fees",
            "Free SPA & Loan Disbursement Fees",
            "Free Loan Stamp Duty"
        ],
        disadvantages: "No major Feng Shui/location disadvantages reported.",
        disadvantageImage: "",
        brochure: "http://mulberi-condominium.com/",
        floorplate: "media/layouts/mulberi_floorplate.jpg",
        floorplateCaption: "Mulberi — Typical floor plate, 6th–17th & 18th floor. Compass + view orientation: Batu Cave (NW), Kepong (NE), KLCC/Mont Kiara (SE), Mont Kiara/DPC (SW)",
        shuttle: "No shuttle van",
        units: [
            {
                name: "Type C1 (1,116 sf)",
                layout: "media/layouts/mulberi_layout.jpg",
                layoutCaption: "Mulberi — Type C series (1,051–1,181 sf), 3 Beds 2 Baths",
                size: 1116,
                rooms: "3 Beds, 2 Baths",
                spaPrice: 479000,
                netPrice: 479000,
                defaultLoan: 479000,
                defaultInstallment: 2030,
                facingDeg: 315,
                loanStampDutyPaidBy: "Developer",
                spaLegalPaidBy: "Developer",
                loanLegalPaidBy: "Developer",
                motPaidBy: "Buyer",
                valuationPaidBy: "Buyer",
                cashback: 0
            },
            {
                name: "Type B (1,497 sf)",
                layout: "media/layouts/mulberi_layout_typeB.jpg",
                layoutCaption: "Mulberi — Type B series (1,497 sf), 4 Beds 3 Baths",
                size: 1497,
                rooms: "4 Beds, 3 Baths",
                spaPrice: 598000,
                netPrice: 598000,
                defaultLoan: 598000,
                defaultInstallment: 2533,
                facingDeg: 135,
                loanStampDutyPaidBy: "Developer",
                spaLegalPaidBy: "Developer",
                loanLegalPaidBy: "Developer",
                motPaidBy: "Buyer",
                valuationPaidBy: "Buyer",
                cashback: 0
            }
        ]
    },
    lsh_segar: {
        id: "lsh_segar",
        name: "LSH Segar (Cheras)",
        developer: "LSH Segar Sdn Bhd",
        tenure: "Leasehold",
        density: "Moderate Density",
        maintenance: "RM 0.33/sf (incl. sinking fund) = RM 330/month",
        transit: "Taman Mutiara MRT Station (~500m walking distance)",
        transitColor: "green",
        transitDistance: "~500m (5-min walk to Leisure Mall / MRT)",
        benefits: [
            "10% Developer Rebate (SPA Price RM 630,000 -> Net RM 567,000)",
            "0% Downpayment (Full Loan of Net Price)",
            "Free SPA & Loan Legal Fees",
            "Free SPA & Loan Disbursement Fees",
            "Freebies: Kitchen Cabinet Top & Bottom (L-shape), Hood & Hob, 2x Airconds, 2x Water Heaters"
        ],
        disadvantages: "Leasehold title, customer pays own Loan Stamp Duty and MOT.",
        disadvantageImage: "",
        brochure: "brochures/TMN SEGAR E BROCHURE 2026.pdf",
        floorplate: "media/layouts/lsh_segar_floorplate.jpg",
        floorplateCaption: "LSH Segar — Typical floor plate. Two rows of Type B1 units around a central tower lift lobby. Source: sales sheet (not published on lshsegar.com).",
        shuttle: "No shuttle van",
        units: [
            {
                name: "Type B1 — North-East side (45°)",
                layout: "media/layouts/lsh_segar_layout.jpg",
                layoutCaption: "LSH Segar — Luxury Sky Homes Type B1 (1,000 sf), 3 Beds 2 Baths",
                size: 1000,
                rooms: "3 Beds, 2 Baths, 2 Carparks",
                spaPrice: 630000,
                netPrice: 567000,
                defaultLoan: 567000,
                defaultInstallment: 2389,
                facingDeg: 45,
                loanStampDutyPaidBy: "Buyer",
                spaLegalPaidBy: "Developer",
                loanLegalPaidBy: "Developer",
                motPaidBy: "Buyer",
                valuationPaidBy: "Buyer",
                cashback: 0
            },
            {
                name: "Type B1 — South-West side (225°)",
                layout: "media/layouts/lsh_segar_layout.jpg",
                layoutCaption: "LSH Segar — Luxury Sky Homes Type B1 (1,000 sf), 3 Beds 2 Baths",
                size: 1000,
                rooms: "3 Beds, 2 Baths, 2 Carparks",
                spaPrice: 630000,
                netPrice: 567000,
                defaultLoan: 567000,
                defaultInstallment: 2389,
                facingDeg: 225,
                loanStampDutyPaidBy: "Buyer",
                spaLegalPaidBy: "Developer",
                loanLegalPaidBy: "Developer",
                motPaidBy: "Buyer",
                valuationPaidBy: "Buyer",
                cashback: 0
            }
        ]
    },
    jrk_convena: {
        id: "jrk_convena",
        name: "JRK Convena (Bukit Jalil)",
        developer: "JRK Group",
        tenure: "Freehold",
        density: "Low Density (331 units only)",
        maintenance: "RM 0.35/sf (Estimated)",
        transit: "Muhibbah LRT Station (~250m walking distance, covered walkway)",
        transitColor: "green",
        transitDistance: "~250m (Covered Walkway to LRT)",
        benefits: [
            "Below Market Price 20-30% (vs Sunway Flora & Rosewoodz)",
            "Freehold & Residential Title",
            "RM 25,000 Cash Back received upon signing SPA",
            "Free SPA & Loan Legal Fees (Panel Lawyer only)"
        ],
        disadvantages: "Balcony faces directly towards a graveyard (visual Feng Shui concern). Slow lift service (only 3 lifts for the whole building).",
        disadvantageImage: "media/jrk_graveyard.jpg",
        brochure: "https://www.jrkgroup.com.my/our-projects/jrk-convena/",
        floorplate: "media/layouts/jrk_convena_floorplate.jpg",
        floorplateCaption: "JRK Convena — Typical floor plate showing Type A / B / C unit positions and the single lift lobby (3 lifts serving the level)",
        shuttle: "TBC",
        units: [
            {
                name: "Type C — North-East side (44°)",
                layout: "media/layouts/jrk_convena_layout.jpg",
                layoutCaption: "JRK Convena — Type C (1,050 sf), 3+1 Beds 2 Baths",
                size: 1050,
                rooms: "3 Beds, 2 Baths, 2 Carparks",
                spaPrice: 650000,
                netPrice: 560000,
                defaultLoan: 585000, // 90% of SPA
                defaultInstallment: 2520,
                facingDeg: 44,
                loanStampDutyPaidBy: "Buyer", // Stated as RM 2,925
                spaLegalPaidBy: "Developer",
                loanLegalPaidBy: "Developer",
                motPaidBy: "Buyer", // Stated as RM 13,500
                valuationPaidBy: "Buyer", // Stated as RM 3,000
                cashback: 25000
            },
            {
                name: "Type C — South-West corner (224°)",
                layout: "media/layouts/jrk_convena_layout.jpg",
                layoutCaption: "JRK Convena — Type C (1,050 sf), 3+1 Beds 2 Baths",
                size: 1050,
                rooms: "3 Beds, 2 Baths, 2 Carparks",
                spaPrice: 650000,
                netPrice: 560000,
                defaultLoan: 585000, // 90% of SPA
                defaultInstallment: 2520,
                facingDeg: 224,
                unitDisadvantage: "This unit: front door opens directly onto the refuse room — a direct Feng Shui concern for the main entrance (sha qi at the door, plus odour and traffic). It is also a corner unit.",
                loanStampDutyPaidBy: "Buyer", // Stated as RM 2,925
                spaLegalPaidBy: "Developer",
                loanLegalPaidBy: "Developer",
                motPaidBy: "Buyer", // Stated as RM 13,500
                valuationPaidBy: "Buyer", // Stated as RM 3,000
                cashback: 25000
            }
        ]
    },
    psv1: {
        id: "psv1",
        name: "PSV 1 Residences (Sungai Besi)",
        developer: "Platinum Victory",
        tenure: "Leasehold",
        density: "High Density",
        maintenance: "RM 0.30/sf (Estimated)",
        transit: "Bandar Tasik Selatan / TBS Integrated Hub (~10-min walk)",
        transitColor: "green",
        transitDistance: "~10-min walk to LRT BTS / TBS Hub",
        benefits: [
            "High rebates (7% Developer Rebate + 3% Conditional + 5% VP Promotion Rebate)",
            "VP Promotion Rebate offsets RM 618/month of installment",
            "Free SPA & Loan Legal and Disbursement Fees",
            "Free Loan Stamp Duty",
            "Freebies: 5x Air-conds, 3x Water Heaters, Member Price Fully Furnished Package"
        ],
        disadvantages: "Balcony faces a Mosque (Masjid) directly (noise / visual considerations). High density development.",
        disadvantageImage: "media/psv1_mosque.jpg",
        brochure: "https://platinumvictory.com/project/psv-1/",
        floorplate: "media/layouts/psv1_floorplate.jpg",
        floorplateCaption: "PSV 1 — Key plate for Level 9–18 & 20–39. Type C units shaded (05, 06, 11, 12). Unit 06 sits on the lower row with north pointing up.",
        shuttle: "Van to UCSI, LRT BTS, MRT Sungai Besi",
        units: [
            {
                name: "Unit 35-06 (1,317 sf)",
                layout: "media/layouts/psv1_layout.jpg",
                layoutCaption: "PSV 1 — Type C / C(M) (1,317 sf), 3 Beds + Ensuite, 2 Baths",
                size: 1317,
                rooms: "4 Beds, 3 Baths, 2 Carparks (G-9, 10)",
                spaPrice: 745751,
                netPrice: 631176,
                defaultLoan: 668304, // 90% of SPA
                defaultInstallment: 2261, // Net after RM 618 rebate (Original 2879)
                facingDeg: 135,
                loanStampDutyPaidBy: "Developer",
                spaLegalPaidBy: "Developer",
                loanLegalPaidBy: "Developer",
                motPaidBy: "Buyer",
                valuationPaidBy: "Buyer",
                cashback: 0
            }
        ]
    }
};

let currentProperty = "mulberi";
let currentUnitIndex = 0;

// Facing degree = the direction you look when standing inside and walking out the front door.
// Balcony / main view is therefore the opposite bearing (degree + 180).
const COMPASS_POINTS = [
    "North", "North-East", "East", "South-East",
    "South", "South-West", "West", "North-West"
];

function compassLabel(deg) {
    const d = ((deg % 360) + 360) % 360;
    return COMPASS_POINTS[Math.round(d / 45) % 8];
}

function facingText(unit) {
    if (typeof unit.facingDeg !== "number") return unit.facing || "—";
    const door = ((unit.facingDeg % 360) + 360) % 360;
    const rear = (door + 180) % 360;
    return `${compassLabel(door)} ${door}° (door) · ${compassLabel(rear)} ${rear}° (rear/view)`;
}

// PMT calculation formula
function calculatePMT(principal, annualRate, years) {
    if (principal <= 0) return 0;
    const monthlyRate = annualRate / 12;
    const totalPayments = years * 12;
    return (principal * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / (Math.pow(1 + monthlyRate, totalPayments) - 1);
}

// Calculate MOT stamp duty based on Malaysian scale (standard tiered scale)
function calculateMOT(propertyValue) {
    let mot = 0;
    if (propertyValue <= 100000) {
        mot = propertyValue * 0.01;
    } else if (propertyValue <= 500000) {
        mot = (100000 * 0.01) + ((propertyValue - 100000) * 0.02);
    } else if (propertyValue <= 1000000) {
        mot = (100000 * 0.01) + (400000 * 0.02) + ((propertyValue - 500000) * 0.03);
    } else {
        mot = (100000 * 0.01) + (400000 * 0.02) + (500000 * 0.03) + ((propertyValue - 1000000) * 0.04);
    }
    return mot;
}

// Calculate Loan Stamp Duty (0.5% of loan amount)
function calculateLoanStampDuty(loanAmount) {
    return loanAmount * 0.005;
}

function updateUI() {
    const prop = propertyData[currentProperty];
    const unit = prop.units[currentUnitIndex];

    // Update Project Meta Panel
    document.getElementById("proj-title").innerText = prop.name;
    document.getElementById("meta-developer").innerText = prop.developer;
    document.getElementById("meta-tenure").innerText = prop.tenure;
    document.getElementById("meta-density").innerText = prop.density;
    document.getElementById("meta-maintenance").innerText = prop.maintenance;
    document.getElementById("meta-shuttle").innerText = prop.shuttle;

    // Update Transit badge
    const transitBadge = document.getElementById("meta-transit");
    transitBadge.innerText = prop.transitDistance;
    transitBadge.className = `transit-badge ${prop.transitColor}`;
    document.getElementById("transit-desc").innerText = prop.transit;

    // Update Unit Selector
    const unitCardsContainer = document.getElementById("unit-cards-container");
    unitCardsContainer.innerHTML = "";
    prop.units.forEach((u, index) => {
        const card = document.createElement("div");
        card.className = `unit-card ${index === currentUnitIndex ? 'selected' : ''}`;
        card.onclick = () => {
            currentUnitIndex = index;
            resetCalculatorInputs();
            updateUI();
        };

        card.innerHTML = `
            <div class="unit-card-header">
                <span class="unit-name">${u.name}</span>
                <span class="unit-price">RM ${u.netPrice.toLocaleString()}</span>
            </div>
            <div class="unit-details-list">
                <span>Rooms: ${u.rooms}</span>
                <span>Front Door Facing: ${facingText(u)}</span>
                ${u.unitDisadvantage ? `<span class="unit-warn">⚠ Unit-specific concern — see notes</span>` : ""}
            </div>
        `;
        unitCardsContainer.appendChild(card);
    });

    // Update Benefits
    const benefitsList = document.getElementById("benefits-list");
    benefitsList.innerHTML = "";
    prop.benefits.forEach(benefit => {
        const li = document.createElement("li");
        li.className = "benefit-item";
        li.innerHTML = `<span class="benefit-icon">✓</span> <span>${benefit}</span>`;
        benefitsList.appendChild(li);
    });

    // Update Disadvantages
    const disadvantageText = document.getElementById("disadvantage-text");
    const disadvantageMediaBtn = document.getElementById("disadvantage-media-btn");
    disadvantageText.innerText = unit.unitDisadvantage
        ? `${prop.disadvantages}\n\n${unit.unitDisadvantage}`
        : prop.disadvantages;
    
    if (prop.disadvantageImage) {
        disadvantageMediaBtn.style.display = "flex";
        disadvantageMediaBtn.onclick = () => openLightbox(prop.disadvantageImage, `${prop.name} Disadvantage View`);
    } else {
        disadvantageMediaBtn.style.display = "none";
    }



    // Update Layout Preview (Unit Layout <-> Building Floor Plan)
    renderPlanPreview();

    // Calculate details dynamically based on current slider/inputs
    calculateFinancials();
}

// Fills one plan section (image + caption + graceful fallback)
function renderPlanSection(imgId, captionId, fallbackId, path, text, emptyMsg) {
    const img = document.getElementById(imgId);
    const caption = document.getElementById(captionId);
    const fallback = document.getElementById(fallbackId);

    caption.innerText = path ? text : "";

    if (!path) {
        img.style.display = "none";
        img.removeAttribute("src");
        fallback.style.display = "block";
        fallback.innerText = emptyMsg;
        return;
    }

    img.style.display = "";
    fallback.style.display = "none";
    img.src = path;
    img.alt = text;
    img.onclick = () => openLightbox(path, text);
    img.onerror = () => {
        img.style.display = "none";
        fallback.style.display = "block";
        fallback.innerText = `Image not found: ${path}`;
    };
}

// Renders the unit layout and the building floor plate side by side
function renderPlanPreview() {
    const prop = propertyData[currentProperty];
    const unit = prop.units[currentUnitIndex];

    renderPlanSection(
        "layout-preview-img", "layout-caption", "layout-fallback",
        unit.layout || `media/layouts/${prop.id}_layout.jpg`,
        unit.layoutCaption || `${prop.name} — ${unit.name}`,
        "No unit layout available for this unit."
    );

    renderPlanSection(
        "floorplate-img", "floorplate-caption", "floorplate-fallback",
        prop.floorplate,
        prop.floorplateCaption || `${prop.name} — Building floor plan`,
        prop.floorplateCaption || "No building floor plan available for this project."
    );
}

function resetCalculatorInputs() {
    // No inputs to reset except resetting unit index defaults if needed
}

function calculateFinancials() {
    const prop = propertyData[currentProperty];
    const unit = prop.units[currentUnitIndex];

    // Fixed parameters: 90% Loan, 3.9% Interest, 35 Years
    const marginPercent = 90;
    const annualRate = 3.9 / 100;
    const tenureYears = 35;

    // Loan calculations
    const totalLoanAmount = unit.spaPrice * (marginPercent / 100);
    const monthlyInstallment = calculatePMT(totalLoanAmount, annualRate, tenureYears);

    // Update displays
    document.getElementById("res-purchase-price").innerText = `RM ${unit.netPrice.toLocaleString()}`;
    document.getElementById("res-loan-amount").innerText = `RM ${totalLoanAmount.toLocaleString()}`;
    document.getElementById("res-installment").innerText = `RM ${Math.round(monthlyInstallment).toLocaleString()}`;
}

// Lightbox controller
function openLightbox(imgSrc, captionText) {
    const modal = document.getElementById("media-modal");
    const modalImg = document.getElementById("modal-img");
    const modalCaption = document.getElementById("modal-caption");

    modalImg.src = imgSrc;
    modalCaption.innerText = captionText;
    modal.classList.add("active");
}

function closeLightbox() {
    const modal = document.getElementById("media-modal");
    modal.classList.remove("active");
}

// Event Listeners setup
document.addEventListener("DOMContentLoaded", () => {
    // Nav Tabs clicks
    const tabButtons = document.querySelectorAll(".tab-btn");
    tabButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            tabButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            currentProperty = button.dataset.property;
            currentUnitIndex = 0;
            updateUI();
        });
    });

    // Collapse/expand the comparison table to free up vertical space
    const cmpBtn = document.getElementById("toggle-comparison");
    const cmpBody = document.getElementById("comparison-body");
    if (cmpBtn && cmpBody) {
        cmpBtn.addEventListener("click", () => {
            const hidden = cmpBody.classList.toggle("collapsed");
            cmpBtn.innerText = hidden ? "Show" : "Hide";
        });
    }

    // Initialize UI
    updateUI();
});
