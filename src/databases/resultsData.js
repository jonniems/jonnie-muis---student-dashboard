const resultsInput = [
  {
    firstName: "Evelyn",
    assignment: "SCRUM",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Evelyn",
    assignment: "W1D1-1",
    difficultyRate: 3,
    funRate: 3
  },
  {
    firstName: "Evelyn",
    assignment: "W1D2-1",
    difficultyRate: 1,
    funRate: 3
  },
  {
    firstName: "Evelyn",
    assignment: "W1D2-2",
    difficultyRate: 1,
    funRate: 4
  },
  {
    firstName: "Evelyn",
    assignment: "W1D2-3",
    difficultyRate: 2,
    funRate: 3
  },
  {
    firstName: "Evelyn",
    assignment: "W1D2-4",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Evelyn",
    assignment: "W1D2-5",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Evelyn",
    assignment: "W1D3-1",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Evelyn",
    assignment: "W1D3-2",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Evelyn",
    assignment: "W1D3-4",
    difficultyRate: 4,
    funRate: 4
  },
  {
    firstName: "Evelyn",
    assignment: "W1D3-5",
    difficultyRate: 4,
    funRate: 4
  },
  {
    firstName: "Evelyn",
    assignment: "W1D3 - Project - Guess-the-number",
    difficultyRate: 5,
    funRate: 5
  },
  {
    firstName: "Evelyn",
    assignment: "W1D4-1",
    difficultyRate: 4,
    funRate: 5
  },
  {
    firstName: "Evelyn",
    assignment: "W1D4 - Project - Kleurentoggle",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Evelyn",
    assignment: "W1D5 - Project - Galgje",
    difficultyRate: 3,
    funRate: 3
  },
  {
    firstName: "Evelyn",
    assignment: "W2D1-1",
    difficultyRate: 1,
    funRate: 5
  },
  {
    firstName: "Evelyn",
    assignment: "W2D1-2",
    difficultyRate: 2,
    funRate: 5
  },
  {
    firstName: "Evelyn",
    assignment: "W2D2-1",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Evelyn",
    assignment: "W2D2-2",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Evelyn",
    assignment: "W2D2-3",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Evelyn",
    assignment: "W2D3-1",
    difficultyRate: 4,
    funRate: 4
  },
  {
    firstName: "Evelyn",
    assignment: "W2D3-2",
    difficultyRate: 1,
    funRate: 3
  },
  {
    firstName: "Evelyn",
    assignment: "W2D3-3",
    difficultyRate: 4,
    funRate: 4
  },
  {
    firstName: "Evelyn",
    assignment: "W2D4-1",
    difficultyRate: 1,
    funRate: 3
  },
  {
    firstName: "Evelyn",
    assignment: "W2D4-2",
    difficultyRate: 4,
    funRate: 4
  },
  {
    firstName: "Evelyn",
    assignment: "W2D4-3",
    difficultyRate: 1,
    funRate: 3
  },
  {
    firstName: "Evelyn",
    assignment: "W2D5 - Project - Filmzoeker",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Evelyn",
    assignment: "W3D1-1",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Evelyn",
    assignment: "W3D1-2",
    difficultyRate: 2,
    funRate: 4
  },
  {
    firstName: "Evelyn",
    assignment: "W3D1-3",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Evelyn",
    assignment: "W3D1-4",
    difficultyRate: 3,
    funRate: 3
  },
  {
    firstName: "Evelyn",
    assignment: "W3D2-1",
    difficultyRate: 2,
    funRate: 4
  },
  {
    firstName: "Evelyn",
    assignment: "W3D2-2",
    difficultyRate: 3,
    funRate: 3
  },
  {
    firstName: "Evelyn",
    assignment: "W3D2-3",
    difficultyRate: 3,
    funRate: 5
  },
  {
    firstName: "Evelyn",
    assignment: "W3D3-1",
    difficultyRate: 4,
    funRate: 4
  },
  {
    firstName: "Evelyn",
    assignment: "W3D3-2",
    difficultyRate: 4,
    funRate: 5
  },
  {
    firstName: "Evelyn",
    assignment: "W3D3-3",
    difficultyRate: 3,
    funRate: 5
  },
  {
    firstName: "Evelyn",
    assignment: "W3D3-4",
    difficultyRate: 4,
    funRate: 5
  },
  {
    firstName: "Evelyn",
    assignment: "W3D4-1",
    difficultyRate: 5,
    funRate: 5
  },
  {
    firstName: "Evelyn",
    assignment: "W3D4-2",
    difficultyRate: 1,
    funRate: 5
  },
  {
    firstName: "Evelyn",
    assignment: "W3D5 - Project - Todo-List",
    difficultyRate: 2,
    funRate: 5
  },
  {
    firstName: "Evelyn",
    assignment: "W4D2-1",
    difficultyRate: 1,
    funRate: 5
  },
  {
    firstName: "Evelyn",
    assignment: "W4D2-2",
    difficultyRate: 1,
    funRate: 5
  },
  {
    firstName: "Evelyn",
    assignment: "W4D2-3",
    difficultyRate: 1,
    funRate: 5
  },
  {
    firstName: "Evelyn",
    assignment: "W4D2-4",
    difficultyRate: 1,
    funRate: 5
  },
  {
    firstName: "Evelyn",
    assignment: "W4D3-1",
    difficultyRate: 1,
    funRate: 5
  },
  {
    firstName: "Evelyn",
    assignment: "W4D3-2",
    difficultyRate: 1,
    funRate: 5
  },
  {
    firstName: "Evelyn",
    assignment: "W4D3-3",
    difficultyRate: 1,
    funRate: 5
  },
  {
    firstName: "Evelyn",
    assignment: "W4D3-4",
    difficultyRate: 1,
    funRate: 5
  },
  {
    firstName: "Evelyn",
    assignment: "W4D3-5",
    difficultyRate: 1,
    funRate: 5
  },
  {
    firstName: "Evelyn",
    assignment: "W4D3 - Project - Next-Level CSS",
    difficultyRate: 1,
    funRate: 5
  },
  {
    firstName: "Evelyn",
    assignment: "W5D4-1",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Evelyn",
    assignment: "W5D5 - Project - Lil_Playlist",
    difficultyRate: 4,
    funRate: 3
  },
  {
    firstName: "Evelyn",
    assignment: "W6D1-1",
    difficultyRate: 5,
    funRate: 5
  },
  {
    firstName: "Evelyn",
    assignment: "W6D2-1",
    difficultyRate: 4,
    funRate: 3
  },
  {
    firstName: "Evelyn",
    assignment: "W6D2 - Project - Eindopdracht",
    difficultyRate: 5,
    funRate: 5
  },
  {
    firstName: "Aranka",
    assignment: "SCRUM",
    difficultyRate: 1,
    funRate: 1
  },
  {
    firstName: "Aranka",
    assignment: "W1D1-1",
    difficultyRate: 4,
    funRate: 3
  },
  {
    firstName: "Aranka",
    assignment: "W1D2-1",
    difficultyRate: 3,
    funRate: 1
  },
  {
    firstName: "Aranka",
    assignment: "W1D2-2",
    difficultyRate: 3,
    funRate: 2
  },
  {
    firstName: "Aranka",
    assignment: "W1D2-3",
    difficultyRate: 4,
    funRate: 1
  },
  {
    firstName: "Aranka",
    assignment: "W1D2-4",
    difficultyRate: 2,
    funRate: 3
  },
  {
    firstName: "Aranka",
    assignment: "W1D2-5",
    difficultyRate: 4,
    funRate: 2
  },
  {
    firstName: "Aranka",
    assignment: "W1D3-1",
    difficultyRate: 3,
    funRate: 2
  },
  {
    firstName: "Aranka",
    assignment: "W1D3-2",
    difficultyRate: 2,
    funRate: 1
  },
  {
    firstName: "Aranka",
    assignment: "W1D3-4",
    difficultyRate: 1,
    funRate: 2
  },
  {
    firstName: "Aranka",
    assignment: "W1D3-5",
    difficultyRate: 4,
    funRate: 1
  },
  {
    firstName: "Aranka",
    assignment: "W1D3 - Project - Guess-the-number",
    difficultyRate: 2,
    funRate: 3
  },
  {
    firstName: "Aranka",
    assignment: "W1D4-1",
    difficultyRate: 3,
    funRate: 2
  },
  {
    firstName: "Aranka",
    assignment: "W1D4 - Project - Kleurentoggle",
    difficultyRate: 4,
    funRate: 3
  },
  {
    firstName: "Aranka",
    assignment: "W1D5 - Project - Galgje",
    difficultyRate: 4,
    funRate: 1
  },
  {
    firstName: "Aranka",
    assignment: "W2D1-1",
    difficultyRate: 2,
    funRate: 4
  },
  {
    firstName: "Aranka",
    assignment: "W2D1-2",
    difficultyRate: 4,
    funRate: 4
  },
  {
    firstName: "Aranka",
    assignment: "W2D2-1",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Aranka",
    assignment: "W2D2-2",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Aranka",
    assignment: "W2D2-3",
    difficultyRate: 1,
    funRate: 4
  },
  {
    firstName: "Aranka",
    assignment: "W2D3-1",
    difficultyRate: 4,
    funRate: 3
  },
  {
    firstName: "Aranka",
    assignment: "W2D3-2",
    difficultyRate: 4,
    funRate: 1
  },
  {
    firstName: "Aranka",
    assignment: "W2D3-3",
    difficultyRate: 1,
    funRate: 1
  },
  {
    firstName: "Aranka",
    assignment: "W2D4-1",
    difficultyRate: 1,
    funRate: 4
  },
  {
    firstName: "Aranka",
    assignment: "W2D4-2",
    difficultyRate: 2,
    funRate: 3
  },
  {
    firstName: "Aranka",
    assignment: "W2D4-3",
    difficultyRate: 2,
    funRate: 3
  },
  {
    firstName: "Aranka",
    assignment: "W2D5 - Project - Filmzoeker",
    difficultyRate: 2,
    funRate: 2
  },
  {
    firstName: "Aranka",
    assignment: "W3D1-1",
    difficultyRate: 4,
    funRate: 2
  },
  {
    firstName: "Aranka",
    assignment: "W3D1-2",
    difficultyRate: 3,
    funRate: 2
  },
  {
    firstName: "Aranka",
    assignment: "W3D1-3",
    difficultyRate: 1,
    funRate: 4
  },
  {
    firstName: "Aranka",
    assignment: "W3D1-4",
    difficultyRate: 1,
    funRate: 3
  },
  {
    firstName: "Aranka",
    assignment: "W3D2-1",
    difficultyRate: 1,
    funRate: 3
  },
  {
    firstName: "Aranka",
    assignment: "W3D2-2",
    difficultyRate: 2,
    funRate: 3
  },
  {
    firstName: "Aranka",
    assignment: "W3D2-3",
    difficultyRate: 2,
    funRate: 3
  },
  {
    firstName: "Aranka",
    assignment: "W3D3-1",
    difficultyRate: 2,
    funRate: 2
  },
  {
    firstName: "Aranka",
    assignment: "W3D3-2",
    difficultyRate: 4,
    funRate: 3
  },
  {
    firstName: "Aranka",
    assignment: "W3D3-3",
    difficultyRate: 3,
    funRate: 3
  },
  {
    firstName: "Aranka",
    assignment: "W3D3-4",
    difficultyRate: 1,
    funRate: 3
  },
  {
    firstName: "Aranka",
    assignment: "W3D4-1",
    difficultyRate: 1,
    funRate: 1
  },
  {
    firstName: "Aranka",
    assignment: "W3D4-2",
    difficultyRate: 3,
    funRate: 2
  },
  {
    firstName: "Aranka",
    assignment: "W3D5 - Project - Todo-List",
    difficultyRate: 1,
    funRate: 1
  },
  {
    firstName: "Aranka",
    assignment: "W4D2-1",
    difficultyRate: 2,
    funRate: 1
  },
  {
    firstName: "Aranka",
    assignment: "W4D2-2",
    difficultyRate: 3,
    funRate: 2
  },
  {
    firstName: "Aranka",
    assignment: "W4D2-3",
    difficultyRate: 2,
    funRate: 2
  },
  {
    firstName: "Aranka",
    assignment: "W4D2-4",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Aranka",
    assignment: "W4D3-1",
    difficultyRate: 2,
    funRate: 1
  },
  {
    firstName: "Aranka",
    assignment: "W4D3-2",
    difficultyRate: 4,
    funRate: 4
  },
  {
    firstName: "Aranka",
    assignment: "W4D3-3",
    difficultyRate: 3,
    funRate: 1
  },
  {
    firstName: "Aranka",
    assignment: "W4D3-4",
    difficultyRate: 3,
    funRate: 1
  },
  {
    firstName: "Aranka",
    assignment: "W4D3-5",
    difficultyRate: 4,
    funRate: 3
  },
  {
    firstName: "Aranka",
    assignment: "W4D3 - Project - Next-Level CSS",
    difficultyRate: 4,
    funRate: 4
  },
  {
    firstName: "Aranka",
    assignment: "W5D4-1",
    difficultyRate: 1,
    funRate: 3
  },
  {
    firstName: "Aranka",
    assignment: "W5D5 - Project - Lil_Playlist",
    difficultyRate: 3,
    funRate: 2
  },
  {
    firstName: "Aranka",
    assignment: "W6D1-1",
    difficultyRate: 1,
    funRate: 1
  },
  {
    firstName: "Aranka",
    assignment: "W6D2-1",
    difficultyRate: 2,
    funRate: 2
  },
  {
    firstName: "Aranka",
    assignment: "W6D2 - Project - Eindopdracht",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Floris",
    assignment: "SCRUM",
    difficultyRate: 2,
    funRate: 1
  },
  {
    firstName: "Floris",
    assignment: "W1D1-1",
    difficultyRate: 4,
    funRate: 3
  },
  {
    firstName: "Floris",
    assignment: "W1D2-1",
    difficultyRate: 1,
    funRate: 2
  },
  {
    firstName: "Floris",
    assignment: "W1D2-2",
    difficultyRate: 1,
    funRate: 4
  },
  {
    firstName: "Floris",
    assignment: "W1D2-3",
    difficultyRate: 1,
    funRate: 4
  },
  {
    firstName: "Floris",
    assignment: "W1D2-4",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Floris",
    assignment: "W1D2-5",
    difficultyRate: 1,
    funRate: 3
  },
  {
    firstName: "Floris",
    assignment: "W1D3-1",
    difficultyRate: 2,
    funRate: 4
  },
  {
    firstName: "Floris",
    assignment: "W1D3-2",
    difficultyRate: 4,
    funRate: 4
  },
  {
    firstName: "Floris",
    assignment: "W1D3-4",
    difficultyRate: 4,
    funRate: 2
  },
  {
    firstName: "Floris",
    assignment: "W1D3-5",
    difficultyRate: 2,
    funRate: 4
  },
  {
    firstName: "Floris",
    assignment: "W1D3 - Project - Guess-the-number",
    difficultyRate: 2,
    funRate: 2
  },
  {
    firstName: "Floris",
    assignment: "W1D4-1",
    difficultyRate: 1,
    funRate: 3
  },
  {
    firstName: "Floris",
    assignment: "W1D4 - Project - Kleurentoggle",
    difficultyRate: 4,
    funRate: 3
  },
  {
    firstName: "Floris",
    assignment: "W1D5 - Project - Galgje",
    difficultyRate: 4,
    funRate: 4
  },
  {
    firstName: "Floris",
    assignment: "W2D1-1",
    difficultyRate: 2,
    funRate: 2
  },
  {
    firstName: "Floris",
    assignment: "W2D1-2",
    difficultyRate: 4,
    funRate: 1
  },
  {
    firstName: "Floris",
    assignment: "W2D2-1",
    difficultyRate: 4,
    funRate: 1
  },
  {
    firstName: "Floris",
    assignment: "W2D2-2",
    difficultyRate: 2,
    funRate: 2
  },
  {
    firstName: "Floris",
    assignment: "W2D2-3",
    difficultyRate: 4,
    funRate: 2
  },
  {
    firstName: "Floris",
    assignment: "W2D3-1",
    difficultyRate: 1,
    funRate: 1
  },
  {
    firstName: "Floris",
    assignment: "W2D3-2",
    difficultyRate: 1,
    funRate: 2
  },
  {
    firstName: "Floris",
    assignment: "W2D3-3",
    difficultyRate: 3,
    funRate: 3
  },
  {
    firstName: "Floris",
    assignment: "W2D4-1",
    difficultyRate: 4,
    funRate: 4
  },
  {
    firstName: "Floris",
    assignment: "W2D4-2",
    difficultyRate: 3,
    funRate: 1
  },
  {
    firstName: "Floris",
    assignment: "W2D4-3",
    difficultyRate: 4,
    funRate: 1
  },
  {
    firstName: "Floris",
    assignment: "W2D5 - Project - Filmzoeker",
    difficultyRate: 4,
    funRate: 1
  },
  {
    firstName: "Floris",
    assignment: "W3D1-1",
    difficultyRate: 4,
    funRate: 3
  },
  {
    firstName: "Floris",
    assignment: "W3D1-2",
    difficultyRate: 2,
    funRate: 3
  },
  {
    firstName: "Floris",
    assignment: "W3D1-3",
    difficultyRate: 2,
    funRate: 3
  },
  {
    firstName: "Floris",
    assignment: "W3D1-4",
    difficultyRate: 3,
    funRate: 3
  },
  {
    firstName: "Floris",
    assignment: "W3D2-1",
    difficultyRate: 3,
    funRate: 2
  },
  {
    firstName: "Floris",
    assignment: "W3D2-2",
    difficultyRate: 2,
    funRate: 2
  },
  {
    firstName: "Floris",
    assignment: "W3D2-3",
    difficultyRate: 3,
    funRate: 2
  },
  {
    firstName: "Floris",
    assignment: "W3D3-1",
    difficultyRate: 4,
    funRate: 4
  },
  {
    firstName: "Floris",
    assignment: "W3D3-2",
    difficultyRate: 2,
    funRate: 4
  },
  {
    firstName: "Floris",
    assignment: "W3D3-3",
    difficultyRate: 2,
    funRate: 1
  },
  {
    firstName: "Floris",
    assignment: "W3D3-4",
    difficultyRate: 3,
    funRate: 2
  },
  {
    firstName: "Floris",
    assignment: "W3D4-1",
    difficultyRate: 1,
    funRate: 3
  },
  {
    firstName: "Floris",
    assignment: "W3D4-2",
    difficultyRate: 2,
    funRate: 2
  },
  {
    firstName: "Floris",
    assignment: "W3D5 - Project - Todo-List",
    difficultyRate: 4,
    funRate: 2
  },
  {
    firstName: "Floris",
    assignment: "W4D2-1",
    difficultyRate: 1,
    funRate: 4
  },
  {
    firstName: "Floris",
    assignment: "W4D2-2",
    difficultyRate: 2,
    funRate: 3
  },
  {
    firstName: "Floris",
    assignment: "W4D2-3",
    difficultyRate: 2,
    funRate: 4
  },
  {
    firstName: "Floris",
    assignment: "W4D2-4",
    difficultyRate: 1,
    funRate: 2
  },
  {
    firstName: "Floris",
    assignment: "W4D3-1",
    difficultyRate: 1,
    funRate: 4
  },
  {
    firstName: "Floris",
    assignment: "W4D3-2",
    difficultyRate: 4,
    funRate: 4
  },
  {
    firstName: "Floris",
    assignment: "W4D3-3",
    difficultyRate: 3,
    funRate: 2
  },
  {
    firstName: "Floris",
    assignment: "W4D3-4",
    difficultyRate: 2,
    funRate: 2
  },
  {
    firstName: "Floris",
    assignment: "W4D3-5",
    difficultyRate: 4,
    funRate: 1
  },
  {
    firstName: "Floris",
    assignment: "W4D3 - Project - Next-Level CSS",
    difficultyRate: 2,
    funRate: 2
  },
  {
    firstName: "Floris",
    assignment: "W5D4-1",
    difficultyRate: 1,
    funRate: 3
  },
  {
    firstName: "Floris",
    assignment: "W5D5 - Project - Lil_Playlist",
    difficultyRate: 3,
    funRate: 1
  },
  {
    firstName: "Floris",
    assignment: "W6D1-1",
    difficultyRate: 3,
    funRate: 2
  },
  {
    firstName: "Floris",
    assignment: "W6D2-1",
    difficultyRate: 1,
    funRate: 1
  },
  {
    firstName: "Floris",
    assignment: "W6D2 - Project - Eindopdracht",
    difficultyRate: 4,
    funRate: 1
  },
  {
    firstName: "Hector",
    assignment: "SCRUM",
    difficultyRate: 1,
    funRate: 2
  },
  {
    firstName: "Hector",
    assignment: "W1D1-1",
    difficultyRate: 1,
    funRate: 4
  },
  {
    firstName: "Hector",
    assignment: "W1D2-1",
    difficultyRate: 2,
    funRate: 4
  },
  {
    firstName: "Hector",
    assignment: "W1D2-2",
    difficultyRate: 2,
    funRate: 3
  },
  {
    firstName: "Hector",
    assignment: "W1D2-3",
    difficultyRate: 1,
    funRate: 2
  },
  {
    firstName: "Hector",
    assignment: "W1D2-4",
    difficultyRate: 1,
    funRate: 3
  },
  {
    firstName: "Hector",
    assignment: "W1D2-5",
    difficultyRate: 3,
    funRate: 1
  },
  {
    firstName: "Hector",
    assignment: "W1D3-1",
    difficultyRate: 1,
    funRate: 4
  },
  {
    firstName: "Hector",
    assignment: "W1D3-2",
    difficultyRate: 4,
    funRate: 3
  },
  {
    firstName: "Hector",
    assignment: "W1D3-4",
    difficultyRate: 3,
    funRate: 1
  },
  {
    firstName: "Hector",
    assignment: "W1D3-5",
    difficultyRate: 4,
    funRate: 2
  },
  {
    firstName: "Hector",
    assignment: "W1D3 - Project - Guess-the-number",
    difficultyRate: 3,
    funRate: 1
  },
  {
    firstName: "Hector",
    assignment: "W1D4-1",
    difficultyRate: 1,
    funRate: 1
  },
  {
    firstName: "Hector",
    assignment: "W1D4 - Project - Kleurentoggle",
    difficultyRate: 1,
    funRate: 3
  },
  {
    firstName: "Hector",
    assignment: "W1D5 - Project - Galgje",
    difficultyRate: 2,
    funRate: 4
  },
  {
    firstName: "Hector",
    assignment: "W2D1-1",
    difficultyRate: 4,
    funRate: 4
  },
  {
    firstName: "Hector",
    assignment: "W2D1-2",
    difficultyRate: 3,
    funRate: 2
  },
  {
    firstName: "Hector",
    assignment: "W2D2-1",
    difficultyRate: 4,
    funRate: 3
  },
  {
    firstName: "Hector",
    assignment: "W2D2-2",
    difficultyRate: 1,
    funRate: 2
  },
  {
    firstName: "Hector",
    assignment: "W2D2-3",
    difficultyRate: 3,
    funRate: 2
  },
  {
    firstName: "Hector",
    assignment: "W2D3-1",
    difficultyRate: 3,
    funRate: 1
  },
  {
    firstName: "Hector",
    assignment: "W2D3-2",
    difficultyRate: 4,
    funRate: 2
  },
  {
    firstName: "Hector",
    assignment: "W2D3-3",
    difficultyRate: 4,
    funRate: 2
  },
  {
    firstName: "Hector",
    assignment: "W2D4-1",
    difficultyRate: 2,
    funRate: 4
  },
  {
    firstName: "Hector",
    assignment: "W2D4-2",
    difficultyRate: 4,
    funRate: 1
  },
  {
    firstName: "Hector",
    assignment: "W2D4-3",
    difficultyRate: 3,
    funRate: 2
  },
  {
    firstName: "Hector",
    assignment: "W2D5 - Project - Filmzoeker",
    difficultyRate: 4,
    funRate: 1
  },
  {
    firstName: "Hector",
    assignment: "W3D1-1",
    difficultyRate: 1,
    funRate: 1
  },
  {
    firstName: "Hector",
    assignment: "W3D1-2",
    difficultyRate: 1,
    funRate: 4
  },
  {
    firstName: "Hector",
    assignment: "W3D1-3",
    difficultyRate: 3,
    funRate: 2
  },
  {
    firstName: "Hector",
    assignment: "W3D1-4",
    difficultyRate: 4,
    funRate: 3
  },
  {
    firstName: "Hector",
    assignment: "W3D2-1",
    difficultyRate: 1,
    funRate: 3
  },
  {
    firstName: "Hector",
    assignment: "W3D2-2",
    difficultyRate: 4,
    funRate: 3
  },
  {
    firstName: "Hector",
    assignment: "W3D2-3",
    difficultyRate: 2,
    funRate: 1
  },
  {
    firstName: "Hector",
    assignment: "W3D3-1",
    difficultyRate: 4,
    funRate: 4
  },
  {
    firstName: "Hector",
    assignment: "W3D3-2",
    difficultyRate: 3,
    funRate: 1
  },
  {
    firstName: "Hector",
    assignment: "W3D3-3",
    difficultyRate: 2,
    funRate: 4
  },
  {
    firstName: "Hector",
    assignment: "W3D3-4",
    difficultyRate: 4,
    funRate: 1
  },
  {
    firstName: "Hector",
    assignment: "W3D4-1",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Hector",
    assignment: "W3D4-2",
    difficultyRate: 1,
    funRate: 4
  },
  {
    firstName: "Hector",
    assignment: "W3D5 - Project - Todo-List",
    difficultyRate: 2,
    funRate: 4
  },
  {
    firstName: "Hector",
    assignment: "W4D2-1",
    difficultyRate: 1,
    funRate: 1
  },
  {
    firstName: "Hector",
    assignment: "W4D2-2",
    difficultyRate: 2,
    funRate: 1
  },
  {
    firstName: "Hector",
    assignment: "W4D2-3",
    difficultyRate: 3,
    funRate: 3
  },
  {
    firstName: "Hector",
    assignment: "W4D2-4",
    difficultyRate: 1,
    funRate: 3
  },
  {
    firstName: "Hector",
    assignment: "W4D3-1",
    difficultyRate: 3,
    funRate: 3
  },
  {
    firstName: "Hector",
    assignment: "W4D3-2",
    difficultyRate: 1,
    funRate: 4
  },
  {
    firstName: "Hector",
    assignment: "W4D3-3",
    difficultyRate: 3,
    funRate: 1
  },
  {
    firstName: "Hector",
    assignment: "W4D3-4",
    difficultyRate: 1,
    funRate: 3
  },
  {
    firstName: "Hector",
    assignment: "W4D3-5",
    difficultyRate: 1,
    funRate: 2
  },
  {
    firstName: "Hector",
    assignment: "W4D3 - Project - Next-Level CSS",
    difficultyRate: 3,
    funRate: 1
  },
  {
    firstName: "Hector",
    assignment: "W5D4-1",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Hector",
    assignment: "W5D5 - Project - Lil_Playlist",
    difficultyRate: 3,
    funRate: 1
  },
  {
    firstName: "Hector",
    assignment: "W6D1-1",
    difficultyRate: 1,
    funRate: 1
  },
  {
    firstName: "Hector",
    assignment: "W6D2-1",
    difficultyRate: 4,
    funRate: 2
  },
  {
    firstName: "Hector",
    assignment: "W6D2 - Project - Eindopdracht",
    difficultyRate: 2,
    funRate: 4
  },
  {
    firstName: "Martina",
    assignment: "SCRUM",
    difficultyRate: 1,
    funRate: 1
  },
  {
    firstName: "Martina",
    assignment: "W1D1-1",
    difficultyRate: 4,
    funRate: 1
  },
  {
    firstName: "Martina",
    assignment: "W1D2-1",
    difficultyRate: 3,
    funRate: 3
  },
  {
    firstName: "Martina",
    assignment: "W1D2-2",
    difficultyRate: 2,
    funRate: 1
  },
  {
    firstName: "Martina",
    assignment: "W1D2-3",
    difficultyRate: 2,
    funRate: 1
  },
  {
    firstName: "Martina",
    assignment: "W1D2-4",
    difficultyRate: 4,
    funRate: 2
  },
  {
    firstName: "Martina",
    assignment: "W1D2-5",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Martina",
    assignment: "W1D3-1",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Martina",
    assignment: "W1D3-2",
    difficultyRate: 2,
    funRate: 1
  },
  {
    firstName: "Martina",
    assignment: "W1D3-4",
    difficultyRate: 3,
    funRate: 2
  },
  {
    firstName: "Martina",
    assignment: "W1D3-5",
    difficultyRate: 1,
    funRate: 1
  },
  {
    firstName: "Martina",
    assignment: "W1D3 - Project - Guess-the-number",
    difficultyRate: 2,
    funRate: 2
  },
  {
    firstName: "Martina",
    assignment: "W1D4-1",
    difficultyRate: 4,
    funRate: 2
  },
  {
    firstName: "Martina",
    assignment: "W1D4 - Project - Kleurentoggle",
    difficultyRate: 1,
    funRate: 3
  },
  {
    firstName: "Martina",
    assignment: "W1D5 - Project - Galgje",
    difficultyRate: 1,
    funRate: 4
  },
  {
    firstName: "Martina",
    assignment: "W2D1-1",
    difficultyRate: 1,
    funRate: 4
  },
  {
    firstName: "Martina",
    assignment: "W2D1-2",
    difficultyRate: 4,
    funRate: 2
  },
  {
    firstName: "Martina",
    assignment: "W2D2-1",
    difficultyRate: 4,
    funRate: 1
  },
  {
    firstName: "Martina",
    assignment: "W2D2-2",
    difficultyRate: 3,
    funRate: 3
  },
  {
    firstName: "Martina",
    assignment: "W2D2-3",
    difficultyRate: 3,
    funRate: 1
  },
  {
    firstName: "Martina",
    assignment: "W2D3-1",
    difficultyRate: 4,
    funRate: 2
  },
  {
    firstName: "Martina",
    assignment: "W2D3-2",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Martina",
    assignment: "W2D3-3",
    difficultyRate: 3,
    funRate: 3
  },
  {
    firstName: "Martina",
    assignment: "W2D4-1",
    difficultyRate: 1,
    funRate: 4
  },
  {
    firstName: "Martina",
    assignment: "W2D4-2",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Martina",
    assignment: "W2D4-3",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Martina",
    assignment: "W2D5 - Project - Filmzoeker",
    difficultyRate: 2,
    funRate: 4
  },
  {
    firstName: "Martina",
    assignment: "W3D1-1",
    difficultyRate: 1,
    funRate: 1
  },
  {
    firstName: "Martina",
    assignment: "W3D1-2",
    difficultyRate: 3,
    funRate: 3
  },
  {
    firstName: "Martina",
    assignment: "W3D1-3",
    difficultyRate: 3,
    funRate: 1
  },
  {
    firstName: "Martina",
    assignment: "W3D1-4",
    difficultyRate: 3,
    funRate: 2
  },
  {
    firstName: "Martina",
    assignment: "W3D2-1",
    difficultyRate: 1,
    funRate: 2
  },
  {
    firstName: "Martina",
    assignment: "W3D2-2",
    difficultyRate: 2,
    funRate: 4
  },
  {
    firstName: "Martina",
    assignment: "W3D2-3",
    difficultyRate: 3,
    funRate: 1
  },
  {
    firstName: "Martina",
    assignment: "W3D3-1",
    difficultyRate: 1,
    funRate: 4
  },
  {
    firstName: "Martina",
    assignment: "W3D3-2",
    difficultyRate: 4,
    funRate: 1
  },
  {
    firstName: "Martina",
    assignment: "W3D3-3",
    difficultyRate: 3,
    funRate: 3
  },
  {
    firstName: "Martina",
    assignment: "W3D3-4",
    difficultyRate: 2,
    funRate: 3
  },
  {
    firstName: "Martina",
    assignment: "W3D4-1",
    difficultyRate: 4,
    funRate: 4
  },
  {
    firstName: "Martina",
    assignment: "W3D4-2",
    difficultyRate: 3,
    funRate: 1
  },
  {
    firstName: "Martina",
    assignment: "W3D5 - Project - Todo-List",
    difficultyRate: 2,
    funRate: 3
  },
  {
    firstName: "Martina",
    assignment: "W4D2-1",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Martina",
    assignment: "W4D2-2",
    difficultyRate: 1,
    funRate: 2
  },
  {
    firstName: "Martina",
    assignment: "W4D2-3",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Martina",
    assignment: "W4D2-4",
    difficultyRate: 4,
    funRate: 1
  },
  {
    firstName: "Martina",
    assignment: "W4D3-1",
    difficultyRate: 2,
    funRate: 4
  },
  {
    firstName: "Martina",
    assignment: "W4D3-2",
    difficultyRate: 1,
    funRate: 3
  },
  {
    firstName: "Martina",
    assignment: "W4D3-3",
    difficultyRate: 2,
    funRate: 4
  },
  {
    firstName: "Martina",
    assignment: "W4D3-4",
    difficultyRate: 4,
    funRate: 1
  },
  {
    firstName: "Martina",
    assignment: "W4D3-5",
    difficultyRate: 3,
    funRate: 2
  },
  {
    firstName: "Martina",
    assignment: "W4D3 - Project - Next-Level CSS",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Martina",
    assignment: "W5D4-1",
    difficultyRate: 1,
    funRate: 4
  },
  {
    firstName: "Martina",
    assignment: "W5D5 - Project - Lil_Playlist",
    difficultyRate: 1,
    funRate: 1
  },
  {
    firstName: "Martina",
    assignment: "W6D1-1",
    difficultyRate: 2,
    funRate: 1
  },
  {
    firstName: "Martina",
    assignment: "W6D2-1",
    difficultyRate: 1,
    funRate: 4
  },
  {
    firstName: "Martina",
    assignment: "W6D2 - Project - Eindopdracht",
    difficultyRate: 1,
    funRate: 4
  },
  {
    firstName: "Maurits",
    assignment: "SCRUM",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Maurits",
    assignment: "W1D1-1",
    difficultyRate: 4,
    funRate: 3
  },
  {
    firstName: "Maurits",
    assignment: "W1D2-1",
    difficultyRate: 2,
    funRate: 2
  },
  {
    firstName: "Maurits",
    assignment: "W1D2-2",
    difficultyRate: 1,
    funRate: 4
  },
  {
    firstName: "Maurits",
    assignment: "W1D2-3",
    difficultyRate: 2,
    funRate: 2
  },
  {
    firstName: "Maurits",
    assignment: "W1D2-4",
    difficultyRate: 3,
    funRate: 1
  },
  {
    firstName: "Maurits",
    assignment: "W1D2-5",
    difficultyRate: 2,
    funRate: 3
  },
  {
    firstName: "Maurits",
    assignment: "W1D3-1",
    difficultyRate: 2,
    funRate: 4
  },
  {
    firstName: "Maurits",
    assignment: "W1D3-2",
    difficultyRate: 2,
    funRate: 2
  },
  {
    firstName: "Maurits",
    assignment: "W1D3-4",
    difficultyRate: 2,
    funRate: 2
  },
  {
    firstName: "Maurits",
    assignment: "W1D3-5",
    difficultyRate: 1,
    funRate: 3
  },
  {
    firstName: "Maurits",
    assignment: "W1D3 - Project - Guess-the-number",
    difficultyRate: 1,
    funRate: 1
  },
  {
    firstName: "Maurits",
    assignment: "W1D4-1",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Maurits",
    assignment: "W1D4 - Project - Kleurentoggle",
    difficultyRate: 4,
    funRate: 1
  },
  {
    firstName: "Maurits",
    assignment: "W1D5 - Project - Galgje",
    difficultyRate: 3,
    funRate: 2
  },
  {
    firstName: "Maurits",
    assignment: "W2D1-1",
    difficultyRate: 1,
    funRate: 1
  },
  {
    firstName: "Maurits",
    assignment: "W2D1-2",
    difficultyRate: 2,
    funRate: 3
  },
  {
    firstName: "Maurits",
    assignment: "W2D2-1",
    difficultyRate: 1,
    funRate: 2
  },
  {
    firstName: "Maurits",
    assignment: "W2D2-2",
    difficultyRate: 4,
    funRate: 1
  },
  {
    firstName: "Maurits",
    assignment: "W2D2-3",
    difficultyRate: 2,
    funRate: 2
  },
  {
    firstName: "Maurits",
    assignment: "W2D3-1",
    difficultyRate: 2,
    funRate: 2
  },
  {
    firstName: "Maurits",
    assignment: "W2D3-2",
    difficultyRate: 3,
    funRate: 3
  },
  {
    firstName: "Maurits",
    assignment: "W2D3-3",
    difficultyRate: 2,
    funRate: 1
  },
  {
    firstName: "Maurits",
    assignment: "W2D4-1",
    difficultyRate: 1,
    funRate: 3
  },
  {
    firstName: "Maurits",
    assignment: "W2D4-2",
    difficultyRate: 3,
    funRate: 2
  },
  {
    firstName: "Maurits",
    assignment: "W2D4-3",
    difficultyRate: 3,
    funRate: 3
  },
  {
    firstName: "Maurits",
    assignment: "W2D5 - Project - Filmzoeker",
    difficultyRate: 3,
    funRate: 1
  },
  {
    firstName: "Maurits",
    assignment: "W3D1-1",
    difficultyRate: 4,
    funRate: 4
  },
  {
    firstName: "Maurits",
    assignment: "W3D1-2",
    difficultyRate: 1,
    funRate: 3
  },
  {
    firstName: "Maurits",
    assignment: "W3D1-3",
    difficultyRate: 1,
    funRate: 4
  },
  {
    firstName: "Maurits",
    assignment: "W3D1-4",
    difficultyRate: 1,
    funRate: 2
  },
  {
    firstName: "Maurits",
    assignment: "W3D2-1",
    difficultyRate: 1,
    funRate: 4
  },
  {
    firstName: "Maurits",
    assignment: "W3D2-2",
    difficultyRate: 1,
    funRate: 1
  },
  {
    firstName: "Maurits",
    assignment: "W3D2-3",
    difficultyRate: 4,
    funRate: 3
  },
  {
    firstName: "Maurits",
    assignment: "W3D3-1",
    difficultyRate: 1,
    funRate: 1
  },
  {
    firstName: "Maurits",
    assignment: "W3D3-2",
    difficultyRate: 2,
    funRate: 1
  },
  {
    firstName: "Maurits",
    assignment: "W3D3-3",
    difficultyRate: 1,
    funRate: 3
  },
  {
    firstName: "Maurits",
    assignment: "W3D3-4",
    difficultyRate: 4,
    funRate: 1
  },
  {
    firstName: "Maurits",
    assignment: "W3D4-1",
    difficultyRate: 4,
    funRate: 4
  },
  {
    firstName: "Maurits",
    assignment: "W3D4-2",
    difficultyRate: 1,
    funRate: 3
  },
  {
    firstName: "Maurits",
    assignment: "W3D5 - Project - Todo-List",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Maurits",
    assignment: "W4D2-1",
    difficultyRate: 3,
    funRate: 1
  },
  {
    firstName: "Maurits",
    assignment: "W4D2-2",
    difficultyRate: 4,
    funRate: 4
  },
  {
    firstName: "Maurits",
    assignment: "W4D2-3",
    difficultyRate: 4,
    funRate: 1
  },
  {
    firstName: "Maurits",
    assignment: "W4D2-4",
    difficultyRate: 2,
    funRate: 3
  },
  {
    firstName: "Maurits",
    assignment: "W4D3-1",
    difficultyRate: 3,
    funRate: 1
  },
  {
    firstName: "Maurits",
    assignment: "W4D3-2",
    difficultyRate: 3,
    funRate: 2
  },
  {
    firstName: "Maurits",
    assignment: "W4D3-3",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Maurits",
    assignment: "W4D3-4",
    difficultyRate: 1,
    funRate: 3
  },
  {
    firstName: "Maurits",
    assignment: "W4D3-5",
    difficultyRate: 2,
    funRate: 1
  },
  {
    firstName: "Maurits",
    assignment: "W4D3 - Project - Next-Level CSS",
    difficultyRate: 2,
    funRate: 3
  },
  {
    firstName: "Maurits",
    assignment: "W5D4-1",
    difficultyRate: 1,
    funRate: 3
  },
  {
    firstName: "Maurits",
    assignment: "W5D5 - Project - Lil_Playlist",
    difficultyRate: 4,
    funRate: 2
  },
  {
    firstName: "Maurits",
    assignment: "W6D1-1",
    difficultyRate: 1,
    funRate: 3
  },
  {
    firstName: "Maurits",
    assignment: "W6D2-1",
    difficultyRate: 1,
    funRate: 4
  },
  {
    firstName: "Maurits",
    assignment: "W6D2 - Project - Eindopdracht",
    difficultyRate: 3,
    funRate: 3
  },
  {
    firstName: "Rahima",
    assignment: "SCRUM",
    difficultyRate: 2,
    funRate: 4
  },
  {
    firstName: "Rahima",
    assignment: "W1D1-1",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Rahima",
    assignment: "W1D2-1",
    difficultyRate: 2,
    funRate: 4
  },
  {
    firstName: "Rahima",
    assignment: "W1D2-2",
    difficultyRate: 1,
    funRate: 2
  },
  {
    firstName: "Rahima",
    assignment: "W1D2-3",
    difficultyRate: 1,
    funRate: 3
  },
  {
    firstName: "Rahima",
    assignment: "W1D2-4",
    difficultyRate: 1,
    funRate: 2
  },
  {
    firstName: "Rahima",
    assignment: "W1D2-5",
    difficultyRate: 1,
    funRate: 3
  },
  {
    firstName: "Rahima",
    assignment: "W1D3-1",
    difficultyRate: 1,
    funRate: 1
  },
  {
    firstName: "Rahima",
    assignment: "W1D3-2",
    difficultyRate: 2,
    funRate: 4
  },
  {
    firstName: "Rahima",
    assignment: "W1D3-4",
    difficultyRate: 1,
    funRate: 2
  },
  {
    firstName: "Rahima",
    assignment: "W1D3-5",
    difficultyRate: 2,
    funRate: 2
  },
  {
    firstName: "Rahima",
    assignment: "W1D3 - Project - Guess-the-number",
    difficultyRate: 3,
    funRate: 1
  },
  {
    firstName: "Rahima",
    assignment: "W1D4-1",
    difficultyRate: 4,
    funRate: 3
  },
  {
    firstName: "Rahima",
    assignment: "W1D4 - Project - Kleurentoggle",
    difficultyRate: 2,
    funRate: 4
  },
  {
    firstName: "Rahima",
    assignment: "W1D5 - Project - Galgje",
    difficultyRate: 3,
    funRate: 3
  },
  {
    firstName: "Rahima",
    assignment: "W2D1-1",
    difficultyRate: 2,
    funRate: 2
  },
  {
    firstName: "Rahima",
    assignment: "W2D1-2",
    difficultyRate: 3,
    funRate: 1
  },
  {
    firstName: "Rahima",
    assignment: "W2D2-1",
    difficultyRate: 1,
    funRate: 1
  },
  {
    firstName: "Rahima",
    assignment: "W2D2-2",
    difficultyRate: 1,
    funRate: 1
  },
  {
    firstName: "Rahima",
    assignment: "W2D2-3",
    difficultyRate: 4,
    funRate: 2
  },
  {
    firstName: "Rahima",
    assignment: "W2D3-1",
    difficultyRate: 1,
    funRate: 1
  },
  {
    firstName: "Rahima",
    assignment: "W2D3-2",
    difficultyRate: 1,
    funRate: 4
  },
  {
    firstName: "Rahima",
    assignment: "W2D3-3",
    difficultyRate: 4,
    funRate: 2
  },
  {
    firstName: "Rahima",
    assignment: "W2D4-1",
    difficultyRate: 4,
    funRate: 4
  },
  {
    firstName: "Rahima",
    assignment: "W2D4-2",
    difficultyRate: 4,
    funRate: 4
  },
  {
    firstName: "Rahima",
    assignment: "W2D4-3",
    difficultyRate: 2,
    funRate: 3
  },
  {
    firstName: "Rahima",
    assignment: "W2D5 - Project - Filmzoeker",
    difficultyRate: 3,
    funRate: 1
  },
  {
    firstName: "Rahima",
    assignment: "W3D1-1",
    difficultyRate: 1,
    funRate: 1
  },
  {
    firstName: "Rahima",
    assignment: "W3D1-2",
    difficultyRate: 1,
    funRate: 2
  },
  {
    firstName: "Rahima",
    assignment: "W3D1-3",
    difficultyRate: 2,
    funRate: 3
  },
  {
    firstName: "Rahima",
    assignment: "W3D1-4",
    difficultyRate: 2,
    funRate: 4
  },
  {
    firstName: "Rahima",
    assignment: "W3D2-1",
    difficultyRate: 3,
    funRate: 2
  },
  {
    firstName: "Rahima",
    assignment: "W3D2-2",
    difficultyRate: 1,
    funRate: 4
  },
  {
    firstName: "Rahima",
    assignment: "W3D2-3",
    difficultyRate: 2,
    funRate: 1
  },
  {
    firstName: "Rahima",
    assignment: "W3D3-1",
    difficultyRate: 3,
    funRate: 1
  },
  {
    firstName: "Rahima",
    assignment: "W3D3-2",
    difficultyRate: 4,
    funRate: 4
  },
  {
    firstName: "Rahima",
    assignment: "W3D3-3",
    difficultyRate: 1,
    funRate: 4
  },
  {
    firstName: "Rahima",
    assignment: "W3D3-4",
    difficultyRate: 2,
    funRate: 2
  },
  {
    firstName: "Rahima",
    assignment: "W3D4-1",
    difficultyRate: 1,
    funRate: 2
  },
  {
    firstName: "Rahima",
    assignment: "W3D4-2",
    difficultyRate: 3,
    funRate: 3
  },
  {
    firstName: "Rahima",
    assignment: "W3D5 - Project - Todo-List",
    difficultyRate: 2,
    funRate: 4
  },
  {
    firstName: "Rahima",
    assignment: "W4D2-1",
    difficultyRate: 2,
    funRate: 4
  },
  {
    firstName: "Rahima",
    assignment: "W4D2-2",
    difficultyRate: 4,
    funRate: 3
  },
  {
    firstName: "Rahima",
    assignment: "W4D2-3",
    difficultyRate: 3,
    funRate: 3
  },
  {
    firstName: "Rahima",
    assignment: "W4D2-4",
    difficultyRate: 4,
    funRate: 1
  },
  {
    firstName: "Rahima",
    assignment: "W4D3-1",
    difficultyRate: 2,
    funRate: 1
  },
  {
    firstName: "Rahima",
    assignment: "W4D3-2",
    difficultyRate: 1,
    funRate: 1
  },
  {
    firstName: "Rahima",
    assignment: "W4D3-3",
    difficultyRate: 2,
    funRate: 1
  },
  {
    firstName: "Rahima",
    assignment: "W4D3-4",
    difficultyRate: 2,
    funRate: 2
  },
  {
    firstName: "Rahima",
    assignment: "W4D3-5",
    difficultyRate: 3,
    funRate: 2
  },
  {
    firstName: "Rahima",
    assignment: "W4D3 - Project - Next-Level CSS",
    difficultyRate: 1,
    funRate: 2
  },
  {
    firstName: "Rahima",
    assignment: "W5D4-1",
    difficultyRate: 3,
    funRate: 3
  },
  {
    firstName: "Rahima",
    assignment: "W5D5 - Project - Lil_Playlist",
    difficultyRate: 2,
    funRate: 3
  },
  {
    firstName: "Rahima",
    assignment: "W6D1-1",
    difficultyRate: 4,
    funRate: 4
  },
  {
    firstName: "Rahima",
    assignment: "W6D2-1",
    difficultyRate: 1,
    funRate: 4
  },
  {
    firstName: "Rahima",
    assignment: "W6D2 - Project - Eindopdracht",
    difficultyRate: 4,
    funRate: 1
  },
  {
    firstName: "Sandra",
    assignment: "SCRUM",
    difficultyRate: 4,
    funRate: 1
  },
  {
    firstName: "Sandra",
    assignment: "W1D1-1",
    difficultyRate: 2,
    funRate: 4
  },
  {
    firstName: "Sandra",
    assignment: "W1D2-1",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Sandra",
    assignment: "W1D2-2",
    difficultyRate: 3,
    funRate: 2
  },
  {
    firstName: "Sandra",
    assignment: "W1D2-3",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Sandra",
    assignment: "W1D2-4",
    difficultyRate: 3,
    funRate: 1
  },
  {
    firstName: "Sandra",
    assignment: "W1D2-5",
    difficultyRate: 4,
    funRate: 3
  },
  {
    firstName: "Sandra",
    assignment: "W1D3-1",
    difficultyRate: 1,
    funRate: 1
  },
  {
    firstName: "Sandra",
    assignment: "W1D3-2",
    difficultyRate: 1,
    funRate: 1
  },
  {
    firstName: "Sandra",
    assignment: "W1D3-4",
    difficultyRate: 3,
    funRate: 3
  },
  {
    firstName: "Sandra",
    assignment: "W1D3-5",
    difficultyRate: 4,
    funRate: 3
  },
  {
    firstName: "Sandra",
    assignment: "W1D3 - Project - Guess-the-number",
    difficultyRate: 2,
    funRate: 4
  },
  {
    firstName: "Sandra",
    assignment: "W1D4-1",
    difficultyRate: 3,
    funRate: 2
  },
  {
    firstName: "Sandra",
    assignment: "W1D4 - Project - Kleurentoggle",
    difficultyRate: 1,
    funRate: 3
  },
  {
    firstName: "Sandra",
    assignment: "W1D5 - Project - Galgje",
    difficultyRate: 3,
    funRate: 3
  },
  {
    firstName: "Sandra",
    assignment: "W2D1-1",
    difficultyRate: 4,
    funRate: 1
  },
  {
    firstName: "Sandra",
    assignment: "W2D1-2",
    difficultyRate: 4,
    funRate: 3
  },
  {
    firstName: "Sandra",
    assignment: "W2D2-1",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Sandra",
    assignment: "W2D2-2",
    difficultyRate: 2,
    funRate: 3
  },
  {
    firstName: "Sandra",
    assignment: "W2D2-3",
    difficultyRate: 4,
    funRate: 3
  },
  {
    firstName: "Sandra",
    assignment: "W2D3-1",
    difficultyRate: 1,
    funRate: 2
  },
  {
    firstName: "Sandra",
    assignment: "W2D3-2",
    difficultyRate: 3,
    funRate: 2
  },
  {
    firstName: "Sandra",
    assignment: "W2D3-3",
    difficultyRate: 2,
    funRate: 2
  },
  {
    firstName: "Sandra",
    assignment: "W2D4-1",
    difficultyRate: 1,
    funRate: 3
  },
  {
    firstName: "Sandra",
    assignment: "W2D4-2",
    difficultyRate: 2,
    funRate: 4
  },
  {
    firstName: "Sandra",
    assignment: "W2D4-3",
    difficultyRate: 2,
    funRate: 2
  },
  {
    firstName: "Sandra",
    assignment: "W2D5 - Project - Filmzoeker",
    difficultyRate: 2,
    funRate: 4
  },
  {
    firstName: "Sandra",
    assignment: "W3D1-1",
    difficultyRate: 3,
    funRate: 3
  },
  {
    firstName: "Sandra",
    assignment: "W3D1-2",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Sandra",
    assignment: "W3D1-3",
    difficultyRate: 2,
    funRate: 4
  },
  {
    firstName: "Sandra",
    assignment: "W3D1-4",
    difficultyRate: 2,
    funRate: 2
  },
  {
    firstName: "Sandra",
    assignment: "W3D2-1",
    difficultyRate: 2,
    funRate: 4
  },
  {
    firstName: "Sandra",
    assignment: "W3D2-2",
    difficultyRate: 2,
    funRate: 3
  },
  {
    firstName: "Sandra",
    assignment: "W3D2-3",
    difficultyRate: 1,
    funRate: 2
  },
  {
    firstName: "Sandra",
    assignment: "W3D3-1",
    difficultyRate: 1,
    funRate: 2
  },
  {
    firstName: "Sandra",
    assignment: "W3D3-2",
    difficultyRate: 2,
    funRate: 2
  },
  {
    firstName: "Sandra",
    assignment: "W3D3-3",
    difficultyRate: 4,
    funRate: 4
  },
  {
    firstName: "Sandra",
    assignment: "W3D3-4",
    difficultyRate: 3,
    funRate: 2
  },
  {
    firstName: "Sandra",
    assignment: "W3D4-1",
    difficultyRate: 2,
    funRate: 3
  },
  {
    firstName: "Sandra",
    assignment: "W3D4-2",
    difficultyRate: 1,
    funRate: 1
  },
  {
    firstName: "Sandra",
    assignment: "W3D5 - Project - Todo-List",
    difficultyRate: 1,
    funRate: 2
  },
  {
    firstName: "Sandra",
    assignment: "W4D2-1",
    difficultyRate: 3,
    funRate: 3
  },
  {
    firstName: "Sandra",
    assignment: "W4D2-2",
    difficultyRate: 1,
    funRate: 1
  },
  {
    firstName: "Sandra",
    assignment: "W4D2-3",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Sandra",
    assignment: "W4D2-4",
    difficultyRate: 1,
    funRate: 4
  },
  {
    firstName: "Sandra",
    assignment: "W4D3-1",
    difficultyRate: 3,
    funRate: 1
  },
  {
    firstName: "Sandra",
    assignment: "W4D3-2",
    difficultyRate: 1,
    funRate: 3
  },
  {
    firstName: "Sandra",
    assignment: "W4D3-3",
    difficultyRate: 2,
    funRate: 4
  },
  {
    firstName: "Sandra",
    assignment: "W4D3-4",
    difficultyRate: 1,
    funRate: 4
  },
  {
    firstName: "Sandra",
    assignment: "W4D3-5",
    difficultyRate: 1,
    funRate: 3
  },
  {
    firstName: "Sandra",
    assignment: "W4D3 - Project - Next-Level CSS",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Sandra",
    assignment: "W5D4-1",
    difficultyRate: 1,
    funRate: 1
  },
  {
    firstName: "Sandra",
    assignment: "W5D5 - Project - Lil_Playlist",
    difficultyRate: 2,
    funRate: 2
  },
  {
    firstName: "Sandra",
    assignment: "W6D1-1",
    difficultyRate: 1,
    funRate: 4
  },
  {
    firstName: "Sandra",
    assignment: "W6D2-1",
    difficultyRate: 2,
    funRate: 3
  },
  {
    firstName: "Sandra",
    assignment: "W6D2 - Project - Eindopdracht",
    difficultyRate: 4,
    funRate: 1
  },
  {
    firstName: "Wietske",
    assignment: "SCRUM",
    difficultyRate: 1,
    funRate: 1
  },
  {
    firstName: "Wietske",
    assignment: "W1D1-1",
    difficultyRate: 4,
    funRate: 3
  },
  {
    firstName: "Wietske",
    assignment: "W1D2-1",
    difficultyRate: 1,
    funRate: 4
  },
  {
    firstName: "Wietske",
    assignment: "W1D2-2",
    difficultyRate: 1,
    funRate: 2
  },
  {
    firstName: "Wietske",
    assignment: "W1D2-3",
    difficultyRate: 2,
    funRate: 3
  },
  {
    firstName: "Wietske",
    assignment: "W1D2-4",
    difficultyRate: 2,
    funRate: 1
  },
  {
    firstName: "Wietske",
    assignment: "W1D2-5",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Wietske",
    assignment: "W1D3-1",
    difficultyRate: 1,
    funRate: 2
  },
  {
    firstName: "Wietske",
    assignment: "W1D3-2",
    difficultyRate: 1,
    funRate: 4
  },
  {
    firstName: "Wietske",
    assignment: "W1D3-4",
    difficultyRate: 2,
    funRate: 1
  },
  {
    firstName: "Wietske",
    assignment: "W1D3-5",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Wietske",
    assignment: "W1D3 - Project - Guess-the-number",
    difficultyRate: 2,
    funRate: 4
  },
  {
    firstName: "Wietske",
    assignment: "W1D4-1",
    difficultyRate: 2,
    funRate: 4
  },
  {
    firstName: "Wietske",
    assignment: "W1D4 - Project - Kleurentoggle",
    difficultyRate: 2,
    funRate: 3
  },
  {
    firstName: "Wietske",
    assignment: "W1D5 - Project - Galgje",
    difficultyRate: 3,
    funRate: 3
  },
  {
    firstName: "Wietske",
    assignment: "W2D1-1",
    difficultyRate: 3,
    funRate: 1
  },
  {
    firstName: "Wietske",
    assignment: "W2D1-2",
    difficultyRate: 4,
    funRate: 1
  },
  {
    firstName: "Wietske",
    assignment: "W2D2-1",
    difficultyRate: 2,
    funRate: 2
  },
  {
    firstName: "Wietske",
    assignment: "W2D2-2",
    difficultyRate: 2,
    funRate: 4
  },
  {
    firstName: "Wietske",
    assignment: "W2D2-3",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Wietske",
    assignment: "W2D3-1",
    difficultyRate: 2,
    funRate: 1
  },
  {
    firstName: "Wietske",
    assignment: "W2D3-2",
    difficultyRate: 1,
    funRate: 1
  },
  {
    firstName: "Wietske",
    assignment: "W2D3-3",
    difficultyRate: 2,
    funRate: 3
  },
  {
    firstName: "Wietske",
    assignment: "W2D4-1",
    difficultyRate: 1,
    funRate: 1
  },
  {
    firstName: "Wietske",
    assignment: "W2D4-2",
    difficultyRate: 2,
    funRate: 4
  },
  {
    firstName: "Wietske",
    assignment: "W2D4-3",
    difficultyRate: 4,
    funRate: 3
  },
  {
    firstName: "Wietske",
    assignment: "W2D5 - Project - Filmzoeker",
    difficultyRate: 2,
    funRate: 2
  },
  {
    firstName: "Wietske",
    assignment: "W3D1-1",
    difficultyRate: 1,
    funRate: 3
  },
  {
    firstName: "Wietske",
    assignment: "W3D1-2",
    difficultyRate: 4,
    funRate: 4
  },
  {
    firstName: "Wietske",
    assignment: "W3D1-3",
    difficultyRate: 4,
    funRate: 2
  },
  {
    firstName: "Wietske",
    assignment: "W3D1-4",
    difficultyRate: 1,
    funRate: 4
  },
  {
    firstName: "Wietske",
    assignment: "W3D2-1",
    difficultyRate: 3,
    funRate: 2
  },
  {
    firstName: "Wietske",
    assignment: "W3D2-2",
    difficultyRate: 1,
    funRate: 3
  },
  {
    firstName: "Wietske",
    assignment: "W3D2-3",
    difficultyRate: 2,
    funRate: 4
  },
  {
    firstName: "Wietske",
    assignment: "W3D3-1",
    difficultyRate: 1,
    funRate: 4
  },
  {
    firstName: "Wietske",
    assignment: "W3D3-2",
    difficultyRate: 3,
    funRate: 1
  },
  {
    firstName: "Wietske",
    assignment: "W3D3-3",
    difficultyRate: 1,
    funRate: 3
  },
  {
    firstName: "Wietske",
    assignment: "W3D3-4",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Wietske",
    assignment: "W3D4-1",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Wietske",
    assignment: "W3D4-2",
    difficultyRate: 4,
    funRate: 2
  },
  {
    firstName: "Wietske",
    assignment: "W3D5 - Project - Todo-List",
    difficultyRate: 2,
    funRate: 4
  },
  {
    firstName: "Wietske",
    assignment: "W4D2-1",
    difficultyRate: 3,
    funRate: 3
  },
  {
    firstName: "Wietske",
    assignment: "W4D2-2",
    difficultyRate: 2,
    funRate: 4
  },
  {
    firstName: "Wietske",
    assignment: "W4D2-3",
    difficultyRate: 1,
    funRate: 2
  },
  {
    firstName: "Wietske",
    assignment: "W4D2-4",
    difficultyRate: 4,
    funRate: 3
  },
  {
    firstName: "Wietske",
    assignment: "W4D3-1",
    difficultyRate: 2,
    funRate: 1
  },
  {
    firstName: "Wietske",
    assignment: "W4D3-2",
    difficultyRate: 1,
    funRate: 2
  },
  {
    firstName: "Wietske",
    assignment: "W4D3-3",
    difficultyRate: 1,
    funRate: 4
  },
  {
    firstName: "Wietske",
    assignment: "W4D3-4",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Wietske",
    assignment: "W4D3-5",
    difficultyRate: 4,
    funRate: 3
  },
  {
    firstName: "Wietske",
    assignment: "W4D3 - Project - Next-Level CSS",
    difficultyRate: 4,
    funRate: 2
  },
  {
    firstName: "Wietske",
    assignment: "W5D4-1",
    difficultyRate: 3,
    funRate: 1
  },
  {
    firstName: "Wietske",
    assignment: "W5D5 - Project - Lil_Playlist",
    difficultyRate: 4,
    funRate: 2
  },
  {
    firstName: "Wietske",
    assignment: "W6D1-1",
    difficultyRate: 1,
    funRate: 1
  },
  {
    firstName: "Wietske",
    assignment: "W6D2-1",
    difficultyRate: 2,
    funRate: 1
  },
  {
    firstName: "Wietske",
    assignment: "W6D2 - Project - Eindopdracht",
    difficultyRate: 1,
    funRate: 2
  },
  {
    firstName: "Storm",
    assignment: "SCRUM",
    difficultyRate: 1,
    funRate: 1
  },
  {
    firstName: "Storm",
    assignment: "W1D1-1",
    difficultyRate: 2,
    funRate: 2
  },
  {
    firstName: "Storm",
    assignment: "W1D2-1",
    difficultyRate: 2,
    funRate: 3
  },
  {
    firstName: "Storm",
    assignment: "W1D2-2",
    difficultyRate: 1,
    funRate: 3
  },
  {
    firstName: "Storm",
    assignment: "W1D2-3",
    difficultyRate: 1,
    funRate: 2
  },
  {
    firstName: "Storm",
    assignment: "W1D2-4",
    difficultyRate: 4,
    funRate: 3
  },
  {
    firstName: "Storm",
    assignment: "W1D2-5",
    difficultyRate: 3,
    funRate: 3
  },
  {
    firstName: "Storm",
    assignment: "W1D3-1",
    difficultyRate: 2,
    funRate: 3
  },
  {
    firstName: "Storm",
    assignment: "W1D3-2",
    difficultyRate: 1,
    funRate: 1
  },
  {
    firstName: "Storm",
    assignment: "W1D3-4",
    difficultyRate: 1,
    funRate: 1
  },
  {
    firstName: "Storm",
    assignment: "W1D3-5",
    difficultyRate: 2,
    funRate: 2
  },
  {
    firstName: "Storm",
    assignment: "W1D3 - Project - Guess-the-number",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Storm",
    assignment: "W1D4-1",
    difficultyRate: 4,
    funRate: 2
  },
  {
    firstName: "Storm",
    assignment: "W1D4 - Project - Kleurentoggle",
    difficultyRate: 3,
    funRate: 2
  },
  {
    firstName: "Storm",
    assignment: "W1D5 - Project - Galgje",
    difficultyRate: 4,
    funRate: 4
  },
  {
    firstName: "Storm",
    assignment: "W2D1-1",
    difficultyRate: 2,
    funRate: 4
  },
  {
    firstName: "Storm",
    assignment: "W2D1-2",
    difficultyRate: 3,
    funRate: 2
  },
  {
    firstName: "Storm",
    assignment: "W2D2-1",
    difficultyRate: 4,
    funRate: 4
  },
  {
    firstName: "Storm",
    assignment: "W2D2-2",
    difficultyRate: 2,
    funRate: 1
  },
  {
    firstName: "Storm",
    assignment: "W2D2-3",
    difficultyRate: 1,
    funRate: 1
  },
  {
    firstName: "Storm",
    assignment: "W2D3-1",
    difficultyRate: 2,
    funRate: 3
  },
  {
    firstName: "Storm",
    assignment: "W2D3-2",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Storm",
    assignment: "W2D3-3",
    difficultyRate: 3,
    funRate: 2
  },
  {
    firstName: "Storm",
    assignment: "W2D4-1",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Storm",
    assignment: "W2D4-2",
    difficultyRate: 4,
    funRate: 3
  },
  {
    firstName: "Storm",
    assignment: "W2D4-3",
    difficultyRate: 2,
    funRate: 1
  },
  {
    firstName: "Storm",
    assignment: "W2D5 - Project - Filmzoeker",
    difficultyRate: 4,
    funRate: 1
  },
  {
    firstName: "Storm",
    assignment: "W3D1-1",
    difficultyRate: 2,
    funRate: 1
  },
  {
    firstName: "Storm",
    assignment: "W3D1-2",
    difficultyRate: 2,
    funRate: 2
  },
  {
    firstName: "Storm",
    assignment: "W3D1-3",
    difficultyRate: 1,
    funRate: 2
  },
  {
    firstName: "Storm",
    assignment: "W3D1-4",
    difficultyRate: 2,
    funRate: 3
  },
  {
    firstName: "Storm",
    assignment: "W3D2-1",
    difficultyRate: 1,
    funRate: 4
  },
  {
    firstName: "Storm",
    assignment: "W3D2-2",
    difficultyRate: 3,
    funRate: 3
  },
  {
    firstName: "Storm",
    assignment: "W3D2-3",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Storm",
    assignment: "W3D3-1",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Storm",
    assignment: "W3D3-2",
    difficultyRate: 1,
    funRate: 2
  },
  {
    firstName: "Storm",
    assignment: "W3D3-3",
    difficultyRate: 3,
    funRate: 1
  },
  {
    firstName: "Storm",
    assignment: "W3D3-4",
    difficultyRate: 3,
    funRate: 1
  },
  {
    firstName: "Storm",
    assignment: "W3D4-1",
    difficultyRate: 2,
    funRate: 4
  },
  {
    firstName: "Storm",
    assignment: "W3D4-2",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Storm",
    assignment: "W3D5 - Project - Todo-List",
    difficultyRate: 3,
    funRate: 2
  },
  {
    firstName: "Storm",
    assignment: "W4D2-1",
    difficultyRate: 2,
    funRate: 1
  },
  {
    firstName: "Storm",
    assignment: "W4D2-2",
    difficultyRate: 3,
    funRate: 3
  },
  {
    firstName: "Storm",
    assignment: "W4D2-3",
    difficultyRate: 2,
    funRate: 2
  },
  {
    firstName: "Storm",
    assignment: "W4D2-4",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Storm",
    assignment: "W4D3-1",
    difficultyRate: 3,
    funRate: 4
  },
  {
    firstName: "Storm",
    assignment: "W4D3-2",
    difficultyRate: 2,
    funRate: 3
  },
  {
    firstName: "Storm",
    assignment: "W4D3-3",
    difficultyRate: 1,
    funRate: 1
  },
  {
    firstName: "Storm",
    assignment: "W4D3-4",
    difficultyRate: 3,
    funRate: 1
  },
  {
    firstName: "Storm",
    assignment: "W4D3-5",
    difficultyRate: 2,
    funRate: 3
  },
  {
    firstName: "Storm",
    assignment: "W4D3 - Project - Next-Level CSS",
    difficultyRate: 4,
    funRate: 1
  },
  {
    firstName: "Storm",
    assignment: "W5D4-1",
    difficultyRate: 2,
    funRate: 2
  },
  {
    firstName: "Storm",
    assignment: "W5D5 - Project - Lil_Playlist",
    difficultyRate: 1,
    funRate: 2
  },
  {
    firstName: "Storm",
    assignment: "W6D1-1",
    difficultyRate: 4,
    funRate: 4
  },
  {
    firstName: "Storm",
    assignment: "W6D2-1",
    difficultyRate: 1,
    funRate: 1
  },
  {
    firstName: "Storm",
    assignment: "W6D2 - Project - Eindopdracht",
    difficultyRate: 3,
    funRate: 3
  }
];

export default resultsInput;