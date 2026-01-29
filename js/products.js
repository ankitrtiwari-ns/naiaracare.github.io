// js/products.js

const products = {
    "lumbar-sacro-belt": {
        id: "lumbar-sacro-belt",
        title: "Lumbar-Sacro Belt",
        code: "NGR-2601",
        description: "Professional lumbar support belt provides targeted compression and stabilization to the lower back region. Rigid posterior stays reinforce the lumbar spine while elastic panels allow comfortable movement.",
        features: [
            "Rigid lumbar stays support natural spine curve",
            "Dual-pull elastic strapping system",
            "Breathable mesh panels prevent overheating",
            "Contoured design conforms to body shape"
        ],
        uses: "Lower back pain, lumbar strain, disc herniation support, post-surgical care",
        sizes: "S, M, L, XL, XXL, 3XL",
        image: "images/lumbar-sacro-belt.png",
        category: "Adult Orthosis"
    },
    "abdominal-belt": {
        id: "abdominal-belt",
        title: "Abdominal Belt",
        code: "NGR-2602",
        description: "Wide elastic abdominal binder provides gentle compression and support to the abdominal region following surgery or injury. Promotes healing while reducing discomfort during movement.",
        features: [
            "Wide elastic construction for uniform compression",
            "Hook-and-loop closure allows size adjustment",
            "Breathable material promotes air circulation",
            "Low-profile design conceals under clothing"
        ],
        uses: "Post-abdominal surgery, C-section recovery, hernia support, diastasis recti management",
        sizes: "S, M, L, XL, XXL",
        image: "images/abdominal-belt.png",
        category: "Adult Orthosis"
    },
    "rib-belt": {
        id: "rib-belt",
        title: "Rib Belt",
        code: "NGR-2604",
        description: "Elastic thoracic belt provides circumferential compression to support healing rib fractures and reduce pain during breathing and movement. The snug fit limits rib cage expansion for optimal healing.",
        features: [
            "Elastic construction allows controlled breathing",
            "Hook-and-loop closure for adjustable compression",
            "Thin profile fits under clothing discreetly",
            "Breathable material for extended wear"
        ],
        uses: "Rib fractures, rib contusions, post-thoracic surgery, intercostal muscle strain",
        sizes: "S, M, L, XL, XXL",
        image: "images/rib-belt.png",
        category: "Adult Orthosis"
    },
    "clavical-brace": {
        id: "clavical-brace",
        title: "Clavicle Brace",
        code: "NGR-2603",
        description: "Specialized figure-8 design gently pulls shoulders back to maintain proper clavicle alignment during healing. Provides comfortable support without restricting arm movement.",
        features: [
            "Figure-8 design naturally retracts shoulders",
            "Padded straps prevent discomfort in axilla",
            "Adjustable tension for progressive correction",
            "Lightweight construction for all-day wear"
        ],
        uses: "Clavicle fractures, shoulder posture correction, rounded shoulder syndrome",
        sizes: "S, M, L, XL, XXL",
        image: "images/clavical-brace.png",
        category: "Adult Orthosis"
    },
    "taylor-brace": {
        id: "taylor-brace",
        title: "Taylor Brace",
        code: "NGR-2608",
        description: "Premium thoraco-lumbar-sacral orthosis (TLSO) providing extensive spinal support from upper back to sacrum. Features rigid posterior stays and adjustable anterior compression for maximum stabilization.",
        features: [
            "Full torso coverage from shoulders to pelvis",
            "Rigid posterior stays maintain spinal alignment",
            "Adjustable shoulder straps prevent brace migration",
            "Breathable fabric panels for extended wear comfort"
        ],
        uses: "Spinal fractures, post-spinal surgery, severe kyphosis, compression fractures",
        sizes: "Universal, XXL, 3XL",
        image: "images/taylor-brace.png",
        category: "Adult Orthosis"
    },
    "shoulder-immobilizer": {
        id: "shoulder-immobilizer",
        title: "Shoulder Immobilizer",
        code: "NGR-2605",
        description: "Comprehensive shoulder immobilization system holds the arm securely against the body in the optimal healing position. Features an additional body strap and waist belt for maximum stability.",
        features: [
            "Complete arm immobilization in adduction position",
            "Additional body strap prevents rotation",
            "Padded shoulder and arm support for comfort",
            "Thumb loop maintains proper hand position"
        ],
        uses: "Shoulder dislocations, rotator cuff repairs, shoulder fractures, post-surgical immobilization",
        sizes: "Universal, XXL",
        image: "images/shoulder-immobilizer.png",
        category: "Adult Orthosis"
    },
    "wrist-forearm-brace": {
        id: "wrist-forearm-brace",
        title: "Wrist & Forearm Brace",
        code: "NGR-2607",
        description: "Comprehensive stabilization solution extending from hand to mid-forearm, providing superior support for complex wrist injuries and conditions affecting both wrist and forearm structures.",
        features: [
            "Extended length stabilizes wrist and forearm",
            "Rigid palmer and dorsal stays prevent motion",
            "Thumb loop provides additional stabilization",
            "Adjustable compression straps throughout length"
        ],
        uses: "Severe wrist sprains, forearm fractures, post-surgical care, tendon injuries",
        sizes: "Universal",
        image: "images/wrist-forearm-brace.png",
        category: "Adult Orthosis"
    },
    "cockup-splint": {
        id: "cockup-splint",
        title: "Cockup Splint",
        code: "NGR-2611",
        description: "Professional-grade wrist splint maintains the wrist in a neutral or slightly extended position, reducing strain on tendons and nerves. The rigid palmer stay prevents flexion while allowing finger movement.",
        features: [
            "Rigid palmer stay prevents wrist flexion",
            "Contoured design follows natural wrist anatomy",
            "Open finger design maintains hand function",
            "Adjustable straps control compression level"
        ],
        uses: "Carpal tunnel syndrome, wrist tendonitis, wrist fracture recovery",
        sizes: "S, M, L, XL, XXL",
        image: "images/cockup-splint.png",
        category: "Adult Orthosis"
    },
    "pouch-arm-sling": {
        id: "pouch-arm-sling",
        title: "Pouch Arm Sling",
        code: "NGR-2606",
        description: "Premium arm sling with deep pouch design cradles the arm and hand in an elevated position, promoting circulation and reducing swelling. Adjustable neck strap distributes weight comfortably.",
        features: [
            "Deep pouch design fully supports forearm and hand",
            "Padded neck strap prevents discomfort",
            "Adjustable length accommodates different body types",
            "Breathable mesh fabric for ventilation"
        ],
        uses: "Arm fractures, shoulder injuries, elbow injuries, post-surgical arm elevation",
        sizes: "S, M, L, XL, XXL",
        image: "images/pouch-arm-sling.png",
        category: "Adult Orthosis"
    },
    "wrist-support-thumb": {
        id: "wrist-support-thumb",
        title: "Wrist Support with Thumb",
        code: "NGR-2610",
        description: "Dual-support design addresses both wrist and thumb injuries simultaneously. The integrated thumb loop and wrist wrap provide adjustable compression and stability for optimal healing.",
        features: [
            "Dual stabilization for wrist and thumb",
            "Adjustable elastic compression promotes circulation",
            "Open palm design maintains hand dexterity",
            "Lightweight, breathable construction"
        ],
        uses: "Carpal tunnel syndrome, wrist sprains, thumb tendonitis, RSI prevention",
        sizes: "Universal",
        image: "images/wrist-support-thumb.png",
        category: "Adult Orthosis"
    },
    "wrist-brace-double-lock": {
        id: "wrist-brace-double-lock",
        title: "Wrist Brace Double Lock",
        code: "NGR-2612",
        description: "Advanced dual-stabilization system with rigid stays on both palmer and dorsal sides provides maximum wrist immobilization. Ideal for severe sprains, post-surgical care, and acute injuries.",
        features: [
            "Dual rigid stays (palmer and dorsal)",
            "Double-lock fastening system ensures secure fit",
            "Contoured aluminum stays mold to wrist shape",
            "Enhanced padding for pressure point protection"
        ],
        uses: "Severe wrist sprains, post-operative care, wrist fractures, ligament injuries",
        sizes: "Universal",
        image: "images/wrist-brace-double-lock.png",
        category: "Adult Orthosis"
    },
    "thumb-spica-splint": {
        id: "thumb-spica-splint",
        title: "Thumb Spica Splint",
        code: "NGR-2609",
        description: "A comprehensive thumb and wrist stabilization device featuring rigid stays that immobilize the thumb's CMC joint while supporting the wrist. Ideal for post-injury recovery and repetitive strain conditions.",
        features: [
            "Rigid aluminum stays prevent thumb movement",
            "Adjustable straps for customized compression",
            "Breathable fabric reduces perspiration buildup",
            "Removable stays allow progressive rehabilitation"
        ],
        uses: "Thumb sprains, De Quervain's tenosynovitis, CMC arthritis, gamekeeper's thumb",
        sizes: "Universal",
        image: "images/thumb-spica-splint.png",
        category: "Adult Orthosis"
    },
    "hinged-brace": {
        id: "hinged-brace",
        title: "Hinged Knee Brace",
        code: "NGR-2618",
        description: "Sophisticated knee brace featuring polycentric hinges that allow controlled flexion and extension while preventing harmful lateral movement. Ideal for ligament injuries and progressive rehabilitation.",
        features: [
            "Polycentric hinges mimic natural knee motion",
            "Adjustable ROM locks available",
            "Rigid lateral supports prevent varus/valgus stress",
            "Open patella design reduces pressure on kneecap"
        ],
        uses: "ACL/PCL injuries, MCL/LCL sprains, post-surgical rehabilitation, osteoarthritis",
        sizes: "Universal, XXL, 3XL",
        image: "images/hinged-brace.png",
        category: "Adult Orthosis"
    },
    "rom-knee-brace": {
        id: "rom-knee-brace",
        title: "ROM Knee Brace",
        code: "NGR-2621",
        description: "Professional-grade orthopedic brace featuring an adjustable dial mechanism that allows precise control of knee flexion and extension angles. The bilateral rigid frame enables progressive rehabilitation.",
        features: [
            "Precision ROM dial allows angle adjustment (0 to 120°)",
            "Bilateral rigid aluminum frame for maximum stability",
            "Independent flexion and extension control",
            "Multiple adjustable straps ensure secure positioning"
        ],
        uses: "Post-surgical ACL/PCL reconstruction, meniscus repair, controlled rehabilitation",
        sizes: "Universal",
        image: "images/rom-knee-brace.png",
        category: "Adult Orthosis"
    },
    "knee-immobilizer": {
        id: "knee-immobilizer",
        title: "Knee Immobilizer",
        code: "NGR-2617",
        description: "Heavy-duty knee immobilizer maintains the leg in full extension for maximum protection during acute injuries or post-surgical recovery. Features rigid lateral stays and comprehensive strapping system.",
        features: [
            "Full-length rigid aluminum stays prevent flexion",
            "Multiple adjustable straps ensure secure positioning",
            "Foam padding protects bony prominences",
            "Reinforced construction for long-term durability"
        ],
        uses: "Post-knee surgery, patellar dislocation, ligament tears, severe sprains",
        sizes: "S, M, L, XL, XXL",
        image: "images/knee-immobilizer.png",
        category: "Adult Orthosis"
    },
    "ankle-stirrup-brace": {
        id: "ankle-stirrup-brace",
        title: "Ankle Stirrup Brace",
        code: "NGR-2615",
        description: "Professional-grade ankle brace featuring rigid lateral supports and adjustable cushions. Provides maximum protection against inversion injuries while allowing normal forward motion.",
        features: [
            "Rigid lateral stays prevent inversion/eversion",
            "Adjustable air cells or foam pads for custom fit",
            "Low-profile design fits in athletic footwear",
            "Quick-lacing system for easy application"
        ],
        uses: "Severe ankle sprains, chronic instability, ligament injuries, post-surgical protection",
        sizes: "Universal, XXL",
        image: "images/ankle-stirrup-brace.png",
        category: "Adult Orthosis"
    },
    "ankle-support": {
        id: "ankle-support",
        title: "Ankle Support",
        code: "NGR-2613",
        description: "Comfortable elastic ankle support provides gentle compression and warmth to reduce swelling and promote healing. The breathable knit construction allows all-day wear without discomfort.",
        features: [
            "Four-way stretch fabric for optimal compression",
            "Breathable knit prevents moisture buildup",
            "Contoured heel design prevents slippage",
            "Thin profile fits inside regular footwear"
        ],
        uses: "Mild ankle sprains, chronic instability, arthritis pain relief, sports injury prevention",
        sizes: "S, M, L, XL, XXL",
        image: "images/ankle-support.png",
        category: "Adult Orthosis"
    },
    "knee-cap": {
        id: "knee-cap",
        title: "Knee Cap",
        code: "NGR-2616",
        description: "Essential knee support sleeve provides uniform compression to reduce swelling, improve circulation, and relieve minor knee discomfort. Perfect for everyday activities and mild arthritis management.",
        features: [
            "Seamless tubular knit for 360° compression",
            "Breathable fabric maintains comfort during activity",
            "Flexible design allows full range of motion",
            "Non-slip silicone strips prevent migration"
        ],
        uses: "Mild knee pain, arthritis management, post-activity recovery, general knee support",
        sizes: "S, M, L, XL, XXL, 3XL",
        image: "images/knee-cap.png",
        category: "Adult Orthosis"
    },
    "ankle-binder": {
        id: "ankle-binder",
        title: "Ankle Binder",
        code: "NGR-2614",
        description: "Advanced ankle stabilization featuring integrated figure-8 strapping system that mimics athletic taping techniques. Provides superior lateral support while maintaining comfortable compression.",
        features: [
            "Figure-8 strap configuration for maximum stability",
            "Adjustable compression accommodates swelling",
            "Reinforced heel cup enhances posterior support",
            "Low-profile design fits in most athletic shoes"
        ],
        uses: "Moderate ankle sprains, lateral instability, proprioceptive training",
        sizes: "S, M, L, XL, XXL",
        image: "images/ankle-binder.png",
        category: "Adult Orthosis"
    },
    "cervical-collar": {
        id: "cervical-collar",
        title: "Cervical Collar",
        code: "NGR-2619",
        description: "Engineered for superior cervical support, this medical-grade collar provides optimal stabilization for neck injuries, post-surgical recovery, and chronic pain management.",
        features: [
            "Adjustable height for customized fit and compression",
            "Breathable, skin-friendly material prevents irritation",
            "Rigid support structure maintains proper alignment",
            "Easy-to-use fastening system"
        ],
        uses: "Neck sprains, whiplash injuries, cervical spondylosis, torticollis management",
        sizes: "S, M, L, XL, XXL",
        image: "images/cervical-collar.png",
        category: "Adult Orthosis"
    },
    "cast-shoe": {
        id: "cast-shoe",
        title: "Cast Shoe",
        code: "NGR-2620",
        description: "A specialized orthopedic shoe designed to protect and support the foot during cast recovery or post-injury healing. Features a durable, non-slip sole and adjustable closure system.",
        features: [
            "Square toe design prevents pressure on injuries",
            "Adjustable hook-and-loop straps accommodate swelling",
            "Non-slip, rocker bottom sole for safe ambulation",
            "Lightweight construction reduces leg fatigue"
        ],
        uses: "Post-cast protection, foot fracture recovery, post-surgical foot care",
        sizes: "M, L, XL, XXL",
        image: "images/cast-shoe.png",
        category: "Adult Orthosis"
    },
    "lumbar-backrest": {
        id: "lumbar-backrest",
        title: "Lumbar Backrest",
        code: "NGR-2622",
        description: "Portable lumbar support cushion designed to maintain proper spinal alignment during extended sitting periods. The contoured design fills the lumbar curve gap, reducing lower back strain.",
        features: [
            "Contoured design supports natural lumbar lordosis",
            "Adjustable elastic strap secures to any chair",
            "Firm yet comfortable foam maintains therapeutic support",
            "Lightweight, portable design"
        ],
        uses: "Lower back pain, prolonged sitting support, office ergonomics, driving comfort",
        sizes: "Universal",
        image: "images/lumbar-backrest.png",
        category: "Adult Orthosis"
    },
    "coccyx-cushion": {
        id: "coccyx-cushion",
        title: "Coccyx Cushion",
        code: "NGR-2624",
        description: "Ergonomically designed memory foam cushion with strategic coccyx cutout eliminates direct pressure on the tailbone. The contoured design distributes body weight evenly across the thighs and buttocks.",
        features: [
            "Cutout eliminates tailbone pressure",
            "High-density memory foam maintains shape",
            "Non-slip bottom prevents cushion migration",
            "Washable, breathable cover"
        ],
        uses: "Coccyx fractures, tailbone pain, postpartum recovery, hemorrhoid relief",
        sizes: "Universal",
        image: "images/coccyx-cushion.png",
        category: "Adult Orthosis"
    },
    "cervical-pillow": {
        id: "cervical-pillow",
        title: "Cervical Pillow",
        code: "NGR-2623",
        description: "Anatomically contoured cervical pillow maintains optimal neck alignment during sleep, reducing strain on cervical vertebrae and supporting natural spinal curvature.",
        features: [
            "Contoured design supports natural cervical lordosis",
            "Memory foam conforms to neck shape",
            "Dual-height options accommodate back and side sleepers",
            "Hypoallergenic, breathable cover"
        ],
        uses: "Cervical spondylosis, neck pain relief, post-whiplash recovery, headache prevention",
        sizes: "Universal",
        image: "images/cervical-pillow.png",
        category: "Adult Orthosis"
    },
    "tennis-elbow-support": {
        id: "tennis-elbow-support",
        title: "Tennis Elbow Support",
        code: "NGR-2625",
        description: "Specialized forearm strap applies focused compression to the extensor muscle tendon, reducing strain on the lateral epicondyle. The counter-force mechanism alleviates pain while allowing normal movement.",
        features: [
            "Adjustable compression strap targets pain point",
            "Counter-force pad reduces tendon stress",
            "Breathable material for all-day comfort",
            "Universal design fits either arm"
        ],
        uses: "Tennis elbow, golfer's elbow, forearm tendonitis, repetitive strain injury",
        sizes: "Universal",
        image: "images/tennis-elbow-support.png",
        category: "Adult Orthosis"
    },
    "pelvic-traction-belt": {
        id: "pelvic-traction-belt",
        title: "Pelvic Traction Belt",
        code: "NGR-2626",
        description: "Professional-grade pelvic traction system provides circumferential compression and stabilization to the sacroiliac joint. Features integrated traction straps for controlled pelvic distraction.",
        features: [
            "Wide elastic belt provides pelvic compression",
            "Integrated traction straps for therapeutic distraction",
            "Adjustable compression accommodates body contours",
            "Reinforced construction for sustained traction"
        ],
        uses: "Sacroiliac joint dysfunction, lower back pain, sciatica relief, disc herniation support",
        sizes: "S, M, L, XL",
        image: "images/pelvic-traction-belt.png",
        category: "Adult Orthosis"
    },
    "kids-taylor-brace": {
        id: "kids-taylor-brace",
        title: "Kids Taylor Brace",
        code: "NGK-2607",
        description: "Pediatric thoraco-lumbar-sacral orthosis designed specifically for smaller body frames. Provides complete spinal support from upper back to pelvis while accommodating pediatric growth.",
        features: [
            "Child-sized rigid posterior panel system",
            "Adjustable shoulder straps accommodate growth",
            "Lightweight construction for pediatric comfort",
            "Colorful design improves compliance"
        ],
        uses: "Pediatric spinal fractures, scoliosis support, kyphosis correction",
        sizes: "CH (Child), PD (Pediatric)",
        image: "images/kids-taylor-brace.png",
        category: "Kids Orthosis"
    },
    "kids-clavicle-brace": {
        id: "kids-clavicle-brace",
        title: "Kids Clavicle Brace",
        code: "NGK-2605",
        description: "Pediatric clavicle brace with attractive prints gently retracts shoulders to maintain proper clavicle alignment during healing. Soft padding ensures comfort while providing fracture stabilization.",
        features: [
            "Figure-8 design naturally pulls shoulders back",
            "Child-friendly colorful patterns",
            "Soft padding prevents chafing",
            "Adjustable tension allows progressive correction"
        ],
        uses: "Pediatric clavicle fractures, shoulder posture correction, rounded shoulder syndrome",
        sizes: "CH (Child), PD (Pediatric)",
        image: "images/kids-clavicle-brace.png",
        category: "Kids Orthosis"
    },
    "kids-knee-immobiliser": {
        id: "kids-knee-immobiliser",
        title: "Kids Knee Immobiliser",
        code: "NGK-2606",
        description: "Pediatric knee immobilizer with colorful designs maintains the child's leg in full extension for optimal healing. Lightweight construction with rigid stays provides necessary support.",
        features: [
            "Fun prints make treatment less intimidating",
            "Lightweight aluminum stays provide rigid support",
            "Multiple adjustable straps ensure secure fit",
            "Contoured foam padding for comfort"
        ],
        uses: "Pediatric knee injuries, post-knee surgery, patellar dislocation, ligament sprains",
        sizes: "CH (Child), PD (Pediatric)",
        image: "images/kids-knee-immobiliser.png",
        category: "Kids Orthosis"
    },
    "kids-shoulder-immobiliser": {
        id: "kids-shoulder-immobiliser",
        title: "Kids Shoulder Immobiliser",
        code: "NGK-2604",
        description: "Comprehensive pediatric shoulder immobilization system with colorful designs. Features body strap and waist belt to prevent any shoulder movement during critical healing phases.",
        features: [
            "Child-friendly prints encourage compliance",
            "Complete arm and shoulder immobilization",
            "Padded straps prevent discomfort",
            "Adjustable sizing accommodates growth"
        ],
        uses: "Pediatric shoulder dislocations, clavicle fractures, shoulder sprains",
        sizes: "CH (Child), PD (Pediatric)",
        image: "images/kids-shoulder-immobiliser.png",
        category: "Kids Orthosis"
    },
    "kids-arm-sling": {
        id: "kids-arm-sling",
        title: "Kids Arm Sling",
        code: "NGK-2602",
        description: "Child-friendly arm sling featuring fun, vibrant prints. The adjustable padded strap and deep pouch design provide secure arm elevation while distributing weight comfortably.",
        features: [
            "Colorful, child-appealing fabric designs",
            "Adjustable neck strap grows with the child",
            "Deep pouch cradles entire forearm",
            "Lightweight, breathable material"
        ],
        uses: "Pediatric arm fractures, elbow injuries, wrist fractures, post-surgical support",
        sizes: "CH (Child), PD (Pediatric)",
        image: "images/kids-arm-sling.png",
        category: "Kids Orthosis"
    },
    "kids-wrist-forearm": {
        id: "kids-wrist-forearm",
        title: "Kids Wrist & Forearm Brace",
        code: "NGK-2608",
        description: "Comprehensive pediatric stabilization extending from hand to mid-forearm with appealing designs. Provides rigid support for complex wrist injuries while maintaining comfort.",
        features: [
            "Fun, colorful patterns",
            "Rigid palmer and dorsal stays prevent motion",
            "Thumb loop provides additional stabilization",
            "Lightweight design suitable for active children"
        ],
        uses: "Pediatric wrist fractures, forearm injuries, wrist sprains",
        sizes: "Universal (Pediatric)",
        image: "images/kids-wrist-forearm.png",
        category: "Kids Orthosis"
    },
    "kids-cervical-collar": {
        id: "kids-cervical-collar",
        title: "Kids Cervical Collar (Firm)",
        code: "NGK-2603",
        description: "Structured cervical collar designed specifically for children requiring moderate to firm neck support. Semi-rigid construction provides enhanced stabilization.",
        features: [
            "Semi-rigid construction for enhanced stability",
            "Pediatric-specific height and circumference",
            "Ventilation holes promote air circulation",
            "Adjustable hook-and-loop closure"
        ],
        uses: "Pediatric neck injuries, cervical strain, post-operative neck care",
        sizes: "CH (Child), PD (Pediatric)",
        image: "images/kids-cervical-collar.png",
        category: "Kids Orthosis"
    },
    "kids-cervical-orthosis": {
        id: "kids-cervical-orthosis",
        title: "Kids Cervical Orthosis (Soft)",
        code: "NGK-2601",
        description: "Pediatric-designed cervical collar with lightweight construction and child-friendly sizing. Soft foam material ensures comfort during extended wear while maintaining proper alignment.",
        features: [
            "Child-specific sizing and contoured design",
            "Soft, hypoallergenic foam",
            "Lightweight construction reduces neck fatigue",
            "Easy-to-clean material"
        ],
        uses: "Pediatric neck sprains, torticollis, post-injury neck support",
        sizes: "Universal (Pediatric)",
        image: "images/kids-cervical-orthosis.png",
        category: "Kids Orthosis"
    },
    "kids-knee-wrap": {
        id: "kids-knee-wrap",
        title: "Kids Knee Wrap",
        code: "NGK-2609",
        description: "Adjustable compression wrap with open patella design provides targeted support and compression to the knee joint. Wrap-around design allows for customized fit.",
        features: [
            "Adjustable compression with wrap-around design",
            "Open patella cutout reduces kneecap pressure",
            "Hook-and-loop closure allows perfect fit",
            "Breathable neoprene material"
        ],
        uses: "Knee sprains, mild ligament injuries, post-activity recovery",
        sizes: "Universal",
        image: "images/kids-knee-wrap.png",
        category: "Kids Orthosis"
    },
    "kids-ankle-wrap": {
        id: "kids-ankle-wrap",
        title: "Kids Ankle Wrap",
        code: "NGK-2611",
        description: "Versatile ankle wrap with figure-8 strapping capability provides customizable compression. Accommodates swelling changes and allows users to adjust support level.",
        features: [
            "Wrap-around design for fully adjustable compression",
            "Can be configured in figure-8 pattern",
            "Low-profile construction fits in shoes",
            "Durable material"
        ],
        uses: "Ankle sprains, chronic ankle instability, swelling management",
        sizes: "Universal",
        image: "images/kids-ankle-wrap.png",
        category: "Kids Orthosis"
    },
    "skin-traction-set": {
        id: "skin-traction-set",
        title: "Skin Traction Set",
        code: "NGK-2610",
        description: "Professional skin traction kit for non-invasive lower limb traction therapy. Includes foam-backed adhesive straps, spreader bar, and rope system.",
        features: [
            "Complete traction system with all components",
            "Foam-backed adhesive straps distribute pressure",
            "Adjustable spreader bar maintains alignment",
            "Suitable for home or clinical use"
        ],
        uses: "Femoral fracture pre-operative traction, hip dislocation, muscle spasm relief",
        sizes: "Universal",
        image: "images/skin-traction-set.png",
        category: "Kids Orthosis"
    },
    "fibercast": {
        id: "fibercast",
        title: "Fibercast",
        code: "NGS-2601",
        description: "Premium fibercast material imported from South Korea, delivering superior strength, water resistance, and rapid setting. Ideal for lightweight and durable immobilization.",
        features: [
            "Lightweight and high strength",
            "Water-resistant properties",
            "Rapid setting time",
            "Superior conformability"
        ],
        uses: "Fracture immobilization, post-surgical casting, orthopaedic correction",
        sizes: "Various Widths",
        image: "images/fibercast.png",
        category: "Surgical Aids"
    },
    "safe-padding": {
        id: "safe-padding",
        title: "Safe Padding",
        code: "NGS-2602",
        description: "Superior cushioning under-cast padding designed to protect skin and bony prominences. Soft, breathable material prevents maceration and pressure sores.",
        features: [
            "Soft and breathable texture",
            "Excellent cushioning properties",
            "Tears easily for application",
            "Prevents skin irritation"
        ],
        uses: "Under-cast protection, compression bandaging padding",
        sizes: "Various Widths",
        image: "images/safe-padding.png",
        category: "Surgical Aids"
    },
    "crepe-bandage": {
        id: "crepe-bandage",
        title: "Crepe Bandage",
        code: "NGS-2603",
        description: "High-quality crepe bandage providing exceptional elasticity and support. Ideal for securing dressings, mild compression, and joint support.",
        features: [
            "Exceptional elasticity",
            "Non-fraying edges",
            "Reusable and washable",
            "Breathable weave"
        ],
        uses: "Sprain support, dressing retention, mild compression",
        sizes: "Various Widths",
        image: "images/crepe-bandage.png",
        category: "Surgical Aids"
    },
    "plaster-cutter": {
        id: "plaster-cutter",
        title: "Plaster Cutter",
        code: "NGS-2606",
        description: "Professional-grade plaster cutter ensuring safe, efficient cast removal with precision oscillating blades. Ergonomic design reduces hand fatigue during use.",
        features: [
            "Precision oscillating blade technology",
            "Safe skin-protection mechanism",
            "Ergonomic handle design",
            "Durable motor for clinical use"
        ],
        uses: "Removal of plaster and fiberglass casts",
        sizes: "Standard",
        image: "images/plaster-cutter.png",
        category: "Surgical Aids"
    }
};

// This helps your other pages read this file
window.products = products;