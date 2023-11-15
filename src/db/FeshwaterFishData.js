// FreshwaterFishData.js
// add cichlid, platy, catfish, oddballs
const freshwaterFishSpecies = [
  // Tetra
  {
    name: 'Neon Tetra',
    description: 'Neon Tetras are among the most popular tetras due to their striking iridescent blue and red colors.',
    temperament: 'Peaceful',
    maxGrowthSize: 'Around 1.5 inches (4 cm)',
    img: 'https://as1.ftcdn.net/v2/jpg/04/88/85/40/1000_F_488854015_30rnKc7hKZQpclCkm0rqAH5Fo2MYSADa.jpg',
    size: 'Small',
    species: 'Paracheirodon innesi',
    family: 'Tetra',
    experienceLevel: 'Beginner',
    waterPHRange: '6.0 - 7.0',
    temperatureRange: '72°F - 78°F (22°C - 26°C)'
  },
  {
    name: 'Cardinal Tetra',
    description: 'Cardinal Tetras are known for their vibrant red and blue colors, similar to Neon Tetras.',
    temperament: 'Peaceful',
    maxGrowthSize: 'Around 1.5 inches (4 cm)',
    img: 'https://example.com/cardinal-tetra-image.jpg',
    size: 'Small',
    species: 'Paracheirodon axelrodi',
    family: 'Tetra',
    experienceLevel: 'Intermediate',
    waterPHRange: '6.0 - 7.5',
    temperatureRange: '73°F - 81°F (23°C - 27°C)'
  },
  {
    name: 'Ember Tetra',
    description: 'Ember Tetras have a beautiful fiery orange coloration that adds warmth to any aquarium.',
    temperament: 'Peaceful',
    maxGrowthSize: 'Around 1 inch (2.5 cm)',
    img: 'https://example.com/ember-tetra-image.jpg',
    size: 'Small',
    species: 'Hyphessobrycon amandae',
    family: 'Tetra',
    experienceLevel: 'Beginner',
    waterPHRange: '6.0 - 7.0',
    temperatureRange: '75°F - 82°F (24°C - 28°C)'
  },
  {
    name: 'Black Neon Tetra',
    description: 'Black Neon Tetras feature a combination of black and silver colors, creating a striking appearance.',
    temperament: 'Peaceful',
    maxGrowthSize: 'Around 1.5 inches (4 cm)',
    img: 'https://example.com/black-neon-tetra-image.jpg',
    size: 'Small',
    species: 'Hyphessobrycon herbertaxelrodi',
    family: 'Tetra',
    experienceLevel: 'Beginner',
    waterPHRange: '6.0 - 7.5',
    temperatureRange: '73°F - 81°F (23°C - 27°C)'
  },
  {
    name: 'Vampire Tetra',
    description: 'Vampire Tetras are known for their sharp teeth and predatory behavior, requiring a larger tank.',
    temperament: 'Aggressive',
    maxGrowthSize: 'Around 14 inches (35 cm)',
    img: 'https://example.com/vampire-tetra-image.jpg',
    size: 'Large',
    species: 'Hydrolycus scomberoides',
    family: 'Tetra',
    experienceLevel: 'Advanced',
    waterPHRange: '5.5 - 7.5',
    temperatureRange: '75°F - 82°F (24°C - 28°C)'
  },
  {
    name: 'Congo Tetra',
    description: 'Congo Tetras are large, peaceful tetras known for their distinctive coloration and fin extensions.',
    temperament: 'Peaceful',
    maxGrowthSize: 'Around 3 inches (8 cm)',
    img: 'https://example.com/congo-tetra-image.jpg',
    size: 'Medium',
    species: 'Phenacogrammus interruptus',
    family: 'Tetra',
    experienceLevel: 'Intermediate',
    waterPHRange: '6.0 - 7.5',
    temperatureRange: '73°F - 82°F (23°C - 28°C)'
  },
  {
    name: 'Bleeding Heart Tetra',
    description: 'Bleeding Heart Tetras are named for the heart-shaped red marking on their silver bodies.',
    temperament: 'Peaceful',
    maxGrowthSize: 'Around 2.5 inches (6 cm)',
    img: 'https://example.com/bleeding-heart-tetra-image.jpg',
    size: 'Small',
    species: 'Hyphessobrycon erythrostigma',
    family: 'Tetra',
    experienceLevel: 'Intermediate',
    waterPHRange: '6.0 - 7.0',
    temperatureRange: '74°F - 80°F (23°C - 27°C)'
  },
  {
    name: 'Black Skirt Tetra',
    description: 'Black Skirt Tetras are known for their distinctive black markings on their fins and bodies.',
    temperament: 'Semi-Aggressive',
    maxGrowthSize: 'Around 2 inches (5 cm)',
    img: 'https://example.com/black-skirt-tetra-image.jpg',
    size: 'Small',
    species: 'Gymnocorymbus ternetzi',
    family: 'Tetra',
    experienceLevel: 'Intermediate',
    waterPHRange: '6.0 - 7.5',
    temperatureRange: '72°F - 78°F (22°C - 26°C)'
  },
  {
    name: 'Serpae Tetra',
    description: 'Serpae Tetras are known for their vibrant red coloration and schooling behavior.',
    temperament: 'Semi-Aggressive',
    maxGrowthSize: 'Around 1.5 inches (4 cm)',
    img: 'https://example.com/serpae-tetra-image.jpg',
    size: 'Small',
    species: 'Hyphessobrycon eques',
    family: 'Tetra',
    experienceLevel: 'Intermediate',
    waterPHRange: '5.5 - 7.5',
    temperatureRange: '72°F - 79°F (22°C - 26°C)'
  },
  {
    name: 'Bloodfin Tetra',
    description: 'Bloodfin Tetras are known for their distinctive red fins, adding a splash of color to aquariums.',
    temperament: 'Peaceful',
    maxGrowthSize: 'Around 2 inches (5 cm)',
    img: 'https://example.com/bloodfin-tetra-image.jpg',
    size: 'Small',
    species: 'Aphyocharax anisitsi',
    family: 'Tetra',
    experienceLevel: 'Beginner',
    waterPHRange: '6.0 - 7.5',
    temperatureRange: '74°F - 82°F (23°C - 28°C)'
  },
  {
    name: 'Rummynose Tetra',
    description: 'Rummynose Tetras have a distinct red nose, adding a playful and vibrant element to aquariums.',
    temperament: 'Peaceful',
    maxGrowthSize: 'Around 2 inches (5 cm)',
    img: 'https://example.com/rummynose-tetra-image.jpg',
    size: 'Small',
    species: 'Hemigrammus rhodostomus',
    family: 'Tetra',
    experienceLevel: 'Intermediate',
    waterPHRange: '5.5 - 7.5',
    temperatureRange: '75°F - 81°F (24°C - 27°C)'
  },
  {
    name: 'Emperor Tetra',
    description: 'Emperor Tetras are known for their striking blue and black coloration, adding elegance to aquariums.',
    temperament: 'Peaceful',
    maxGrowthSize: 'Around 2 inches (5 cm)',
    img: 'https://example.com/emperor-tetra-image.jpg',
    size: 'Small',
    species: 'Nematobrycon palmeri',
    family: 'Tetra',
    experienceLevel: 'Intermediate',
    waterPHRange: '5.5 - 7.5',
    temperatureRange: '72°F - 78°F (22°C - 26°C)'
  },
  {
    name: 'Von Rio Tetra',
    description: 'Von Rio Tetras are colorful and active, creating a vibrant and lively aquarium environment.',
    temperament: 'Peaceful',
    maxGrowthSize: 'Around 1.5 inches (4 cm)',
    img: 'https://example.com/von-rio-tetra-image.jpg',
    size: 'Small',
    species: 'Hyphessobrycon flammeus',
    family: 'Tetra',
    experienceLevel: 'Beginner',
    waterPHRange: '6.0 - 7.5',
    temperatureRange: '75°F - 82°F (24°C - 28°C)'
  },

  // Molly Fish
  {
    name: 'Common Black Molly',
    description: 'The Common Black Molly is a popular freshwater fish known for its sleek black coloration.',
    temperament: 'Peaceful',
    maxGrowthSize: 'Around 3 to 4 inches (7.5 to 10 cm)',
    img: 'https://example.com/common-black-molly-image.jpg',
    size: 'Small to Medium',
    species: 'Poecilia sphenops',
    family: 'Molly',
    experienceLevel: 'Beginner',
    waterPHRange: '6.7 - 8.5',
    temperatureRange: '75°F - 82°F (24°C - 28°C)'
  },
  {
    name: 'Dalmatian Molly',
    description: 'Dalmatian Mollies are recognized by their spotted black and white patterns, reminiscent of Dalmatian dogs.',
    temperament: 'Peaceful',
    maxGrowthSize: 'Around 3 to 4 inches (7.5 to 10 cm)',
    img: 'https://example.com/dalmatian-molly-image.jpg',
    size: 'Small to Medium',
    species: 'Poecilia latipinna',
    family: 'Molly',
    experienceLevel: 'Beginner',
    waterPHRange: '7.0 - 8.5',
    temperatureRange: '72°F - 78°F (22°C - 26°C)'
  },
  {
    name: 'Lyretail Molly',
    description: 'Lyretail Mollies are known for their distinct lyre-shaped tails, adding elegance to aquariums.',
    temperament: 'Peaceful',
    maxGrowthSize: 'Around 4 inches (10 cm)',
    img: 'https://example.com/lyretail-molly-image.jpg',
    size: 'Small to Medium',
    species: 'Poecilia reticulata',
    family: 'Molly',
    experienceLevel: 'Intermediate',
    waterPHRange: '7.0 - 8.5',
    temperatureRange: '75°F - 82°F (24°C - 28°C)'
  },
  {
    name: 'Sailfin Molly',
    description: 'Sailfin Mollies have an impressive sail-like dorsal fin, making them stand out in aquariums.',
    temperament: 'Peaceful',
    maxGrowthSize: 'Around 4 to 5 inches (10 to 12.5 cm)',
    img: 'https://example.com/sailfin-molly-image.jpg',
    size: 'Medium',
    species: 'Poecilia latipinna',
    family: 'Molly',
    experienceLevel: 'Intermediate',
    waterPHRange: '7.0 - 8.5',
    temperatureRange: '72°F - 78°F (22°C - 26°C)'
  },
  {
    name: 'Gold Dust Molly',
    description: 'Gold Dust Mollies feature a sparkling, gold-like dusting on their scales, creating a visually appealing effect.',
    temperament: 'Peaceful',
    maxGrowthSize: 'Around 3 to 4 inches (7.5 to 10 cm)',
    img: 'https://example.com/gold-dust-molly-image.jpg',
    size: 'Small to Medium',
    species: 'Poecilia sphenops',
    family: 'Molly',
    experienceLevel: 'Beginner',
    waterPHRange: '6.7 - 8.5',
    temperatureRange: '75°F - 82°F (24°C - 28°C)'
  },
  {
    name: 'Balloon Molly',
    description: 'Balloon Mollies are characterized by their inflated, balloon-like appearance, especially in the abdominal region.',
    temperament: 'Peaceful',
    maxGrowthSize: 'Around 3 to 4 inches (7.5 to 10 cm)',
    img: 'https://example.com/balloon-molly-image.jpg',
    size: 'Small to Medium',
    species: 'Poecilia sphenops',
    family: 'Molly',
    experienceLevel: 'Beginner',
    waterPHRange: '6.7 - 8.5',
    temperatureRange: '75°F - 82°F (24°C - 28°C)'
  },
  {
    name: 'Sunset Molly',
    description: 'Sunset Mollies exhibit vibrant and warm coloration, resembling the hues of a sunset.',
    temperament: 'Peaceful',
    maxGrowthSize: 'Around 3 to 4 inches (7.5 to 10 cm)',
    img: 'https://example.com/sunset-molly-image.jpg',
    size: 'Small to Medium',
    species: 'Poecilia sphenops',
    family: 'Molly',
    experienceLevel: 'Intermediate',
    waterPHRange: '7.0 - 8.5',
    temperatureRange: '72°F - 78°F (22°C - 26°C)'
  },
  {
    name: 'Wild Molly Fish',
    description: 'Wild Mollies showcase the natural and diverse color patterns found in their wild counterparts.',
    temperament: 'Peaceful',
    maxGrowthSize: 'Around 3 to 4 inches (7.5 to 10 cm)',
    img: 'https://example.com/wild-molly-fish-image.jpg',
    size: 'Small to Medium',
    species: 'Various',
    family: 'Molly',
    experienceLevel: 'Intermediate',
    waterPHRange: '6.5 - 8.0',
    temperatureRange: '72°F - 78°F (22°C - 26°C)'
  },
  // Swordtails
  {
    name: 'Green Swordtail',
    description: 'The Green Swordtail is a vibrant freshwater fish known for its green coloration and distinctive sword-like tail.',
    temperament: 'Peaceful',
    maxGrowthSize: 'Around 4 inches (10 cm)',
    img: 'https://example.com/green-swordtail-image.jpg',
    size: 'Small to Medium',
    species: 'Xiphophorus hellerii',
    family: 'Swordtail',
    experienceLevel: 'Beginner',
    waterPHRange: '7.0 - 8.5',
    temperatureRange: '72°F - 82°F (22°C - 28°C)'
  },
  {
    name: 'Yellow Swordtail',
    description: 'The Yellow Swordtail is a brightly colored fish with a distinct sword-like tail, adding vibrancy to aquariums.',
    temperament: 'Peaceful',
    maxGrowthSize: 'Around 4 inches (10 cm)',
    img: 'https://example.com/yellow-swordtail-image.jpg',
    size: 'Small to Medium',
    species: 'Xiphophorus hellerii',
    family: 'Swordtail',
    experienceLevel: 'Beginner',
    waterPHRange: '7.0 - 8.5',
    temperatureRange: '72°F - 82°F (22°C - 28°C)'
  },
  {
    name: 'Red Swordtail',
    description: 'The Red Swordtail is a striking fish with vibrant red coloration and a distinctive sword-like tail.',
    temperament: 'Peaceful',
    maxGrowthSize: 'Around 4 inches (10 cm)',
    img: 'https://example.com/red-swordtail-image.jpg',
    size: 'Small to Medium',
    species: 'Xiphophorus hellerii',
    family: 'Swordtail',
    experienceLevel: 'Beginner',
    waterPHRange: '7.0 - 8.5',
    temperatureRange: '72°F - 82°F (22°C - 28°C)'
  },
  {
    name: 'Kohaku Swordtail',
    description: 'The Kohaku Swordtail features a beautiful pattern of red and white colors, reminiscent of traditional Japanese aesthetics.',
    temperament: 'Peaceful',
    maxGrowthSize: 'Around 4 inches (10 cm)',
    img: 'https://example.com/kohaku-swordtail-image.jpg',
    size: 'Small to Medium',
    species: 'Xiphophorus hellerii',
    family: 'Swordtail',
    experienceLevel: 'Intermediate',
    waterPHRange: '7.0 - 8.5',
    temperatureRange: '72°F - 78°F (22°C - 26°C)'
  },
  {
    name: 'Pygmy Swordtail',
    description: 'The Pygmy Swordtail is a smaller species with a distinct sword-like tail, suitable for smaller aquariums.',
    temperament: 'Peaceful',
    maxGrowthSize: 'Around 2 inches (5 cm)',
    img: 'https://example.com/pygmy-swordtail-image.jpg',
    size: 'Small',
    species: 'Xiphophorus pygmaeus',
    family: 'Swordtail',
    experienceLevel: 'Intermediate',
    waterPHRange: '7.0 - 8.5',
    temperatureRange: '72°F - 78°F (22°C - 26°C)'
  },
  {
    name: 'Mickey Mouse Swordtail',
    description: 'The Mickey Mouse Swordtail is recognized for its unique coloration and markings, resembling Mickey Mouse ears.',
    temperament: 'Peaceful',
    maxGrowthSize: 'Around 3 inches (7.5 cm)',
    img: 'https://example.com/mickey-mouse-swordtail-image.jpg',
    size: 'Small to Medium',
    species: 'Xiphophorus maculatus',
    family: 'Swordtail',
    experienceLevel: 'Beginner',
    waterPHRange: '7.0 - 8.5',
    temperatureRange: '72°F - 78°F (22°C - 26°C)'
  },
  // GOLDFISH
  {
    name: "Veiltail Goldfish",
    description: "The Veiltail Goldfish is known for its long, flowing double tail that gives it an elegant appearance.",
    temperament: "Peaceful",
    maxGrowthSize: "Up to 6 inches (15 cm)",
    img: "https://example.com/veiltail-goldfish-image.jpg",
    size: "Small to Medium",
    species: "Carassius auratus",
    family: "Goldfish",
    experienceLevel: "Beginner",
    waterPHRange: "6.0 - 8.0",
    temperatureRange: "65°F - 75°F (18°C - 24°C)"
  },
  {
    name: "Common Goldfish",
    description: "The Common Goldfish is the classic goldfish variety with a sleek, streamlined body and vibrant coloration.",
    temperament: "Peaceful",
    maxGrowthSize: "Up to 12 inches (30 cm)",
    img: "https://example.com/common-goldfish-image.jpg",
    size: "Medium to Large",
    species: "Carassius auratus",
    family: "Goldfish",
    experienceLevel: "Beginner",
    waterPHRange: "6.0 - 8.0",
    temperatureRange: "65°F - 75°F (18°C - 24°C)"
  },
  {
    name: "Tamasaba Goldfish",
    description: "The Tamasaba Goldfish is recognized for its elongated body and distinct forked tail, resembling a traditional Japanese fan.",
    temperament: "Peaceful",
    maxGrowthSize: "Around 10 inches (25 cm)",
    img: "https://example.com/tamasaba-goldfish-image.jpg",
    size: "Medium",
    species: "Carassius auratus",
    family: "Goldfish",
    experienceLevel: "Intermediate",
    waterPHRange: "6.5 - 7.5",
    temperatureRange: "60°F - 75°F (15°C - 24°C)"
  },
  {
    name: "Bubble Eye Goldfish",
    description: "The Bubble Eye Goldfish is characterized by its fluid-filled sacs or bubbles underneath its eyes, creating a distinctive appearance.",
    temperament: "Peaceful",
    maxGrowthSize: "Up to 6 inches (15 cm)",
    img: "https://example.com/bubble-eye-goldfish-image.jpg",
    size: "Small to Medium",
    species: "Carassius auratus",
    family: "Goldfish",
    experienceLevel: "Intermediate",
    waterPHRange: "6.0 - 8.0",
    temperatureRange: "68°F - 74°F (20°C - 23°C)"
  },
  {
    name: "Telescope Goldfish",
    description: "The Telescope Goldfish is known for its protruding, telescope-like eyes, giving it a distinctive and charming appearance.",
    temperament: "Peaceful",
    maxGrowthSize: "Up to 8 inches (20 cm)",
    img: "https://example.com/telescope-goldfish-image.jpg",
    size: "Small to Medium",
    species: "Carassius auratus",
    family: "Goldfish",
    experienceLevel: "Intermediate",
    waterPHRange: "6.5 - 7.5",
    temperatureRange: "68°F - 74°F (20°C - 23°C)"
  },
  {
    name: "Oranda Goldfish",
    description: "The Oranda Goldfish is distinguished by the prominent hood or wen on its head, which can develop into a large, fleshy growth.",
    temperament: "Peaceful",
    maxGrowthSize: "Up to 8 inches (20 cm)",
    img: "https://example.com/oranda-goldfish-image.jpg",
    size: "Medium",
    species: "Carassius auratus",
    family: "Goldfish",
    experienceLevel: "Intermediate",
    waterPHRange: "6.5 - 7.5",
    temperatureRange: "68°F - 74°F (20°C - 23°C)"
  },
  {
    name: "Comet Goldfish",
    description: "The Comet Goldfish is characterized by its long, flowing tail fin and vibrant coloration, resembling a comet streaking through the sky.",
    temperament: "Peaceful",
    maxGrowthSize: "Up to 12 inches (30 cm)",
    img: "https://example.com/comet-goldfish-image.jpg",
    size: "Medium to Large",
    species: "Carassius auratus",
    family: "Goldfish",
    experienceLevel: "Beginner",
    waterPHRange: "6.0 - 8.0",
    temperatureRange: "65°F - 75°F (18°C - 24°C)"
  },  
  {
    name: "Lionhead Goldfish",
    description: "The Lionhead Goldfish is known for its lack of a dorsal fin and the development of a raspberry-like growth on the top of its head.",
    temperament: "Peaceful",
    maxGrowthSize: "Up to 8 inches (20 cm)",
    img: "https://example.com/lionhead-goldfish-image.jpg",
    size: "Small to Medium",
    species: "Carassius auratus",
    family: "Goldfish",
    experienceLevel: "Intermediate",
    waterPHRange: "6.5 - 7.5",
    temperatureRange: "68°F - 74°F (20°C - 23°C)"
  },
  {
    name: "Ryukin Goldfish",
    description: "The Ryukin Goldfish has a distinctive hump on its back, a pointed caudal fin, and a deep body, making it a visually striking variety.",
    temperament: "Peaceful",
    maxGrowthSize: "Up to 8 inches (20 cm)",
    img: "https://example.com/ryukin-goldfish-image.jpg",
    size: "Small to Medium",
    species: "Carassius auratus",
    family: "Goldfish",
    experienceLevel: "Intermediate",
    waterPHRange: "6.5 - 7.5",
    temperatureRange: "68°F - 74°F (20°C - 23°C)"
  },
  {
    name: "Shubunkin Goldfish",
    description: "The Shubunkin Goldfish is known for its calico coloration, which includes patches of red, orange, blue, and black, creating a vibrant and unique appearance.",
    temperament: "Peaceful",
    maxGrowthSize: "Up to 10 inches (25 cm)",
    img: "https://example.com/shubunkin-goldfish-image.jpg",
    size: "Medium",
    species: "Carassius auratus",
    family: "Goldfish",
    experienceLevel: "Beginner",
    waterPHRange: "6.0 - 8.0",
    temperatureRange: "65°F - 75°F (18°C - 24°C)"
  },
  {
    name: "Celestial Eye Goldfish",
    description: "The Celestial Eye Goldfish has eyes that are pointed upwards, giving it a unique and celestial appearance.",
    temperament: "Peaceful",
    maxGrowthSize: "Up to 6 inches (15 cm)",
    img: "https://example.com/celestial-eye-goldfish-image.jpg",
    size: "Small",
    species: "Carassius auratus",
    family: "Goldfish",
    experienceLevel: "Intermediate",
    waterPHRange: "6.5 - 7.5",
    temperatureRange: "68°F - 74°F (20°C - 23°C)"
  },
  {
    name: "Ranchu Goldfish",
    description: "The Ranchu Goldfish is known for its rounded body, lack of a dorsal fin, and a distinctive head shape, creating a charming and unique appearance.",
    temperament: "Peaceful",
    maxGrowthSize: "Up to 6 inches (15 cm)",
    img: "https://example.com/ranchu-goldfish-image.jpg",
    size: "Small",
    species: "Carassius auratus",
    family: "Goldfish",
    experienceLevel: "Intermediate",
    waterPHRange: "6.5 - 7.5",
    temperatureRange: "68°F - 74°F (20°C - 23°C)"
  }
  
  
  
  
  
  
  
  
  
  
];

  export default freshwaterFishSpecies;
  