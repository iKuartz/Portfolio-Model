const songs = [
  {
    imageUrl: './images/speakers/speaker1.png',
    alt: 'Image of Wild World being performed',
    songName: 'Wild World',
    class:'',
    performance: 'Tamany Hall, 26 May 1989',
    summary: 'Cat Stevens amazed everyone with this performance this day.',
    id: '1',
  },
    {
    imageUrl: './images/speakers/speaker3.png',
    alt: 'Image of Lilac Wine being performed',
    songName: 'Lilac Wine',
    class:'',
    performance: 'Broadway, 01 February 1972',
    summary: 'Nina Simone amazed everyone with this performance this day.',
    id: '2',
  },
    {
    imageUrl: './images/speakers/speaker2.png',
    alt: 'Image of Monkey and Bear being performed',
    class:' card-dsk',
    songName: 'Monkey and Bear',
    performance: 'Jeykyl Café, 03 July 2014',
    summary: 'Joanna Newsom amazed everyone with this performance this day.',
    id: '3',
  },
    {
    imageUrl: './images/speakers/speaker4.png',
    alt: 'Image of Wild is the Wind being performed',
    songName: 'Wild is the Wind',
    class:' card-dsk',
    performance: 'Broadway, 01 February 1972',
    summary: 'Nina Simone sang this one right after Lilac Wine in her golden presentation.',
    id: '4',
  },
    {
    imageUrl: './images/speakers/speaker5.png',
    alt: 'Image of I Have Never Loved Someone being performed',
    songName: 'I Have Never Loved Someone',
    class:' card-dsk',
    performance: 'Berlin, 13 November 2020',
    summary: 'My Brightest Diamond touched the audience with this one.',
    id: '5',
  },
    {
    imageUrl: './images/speakers/speaker6.png',
    alt: 'Image of Esme being performed',
    songName: 'Esme',
    class:' card-dsk',
    performance: 'Maison de France, Paris, 15 June 2005',
    summary: 'Joanna Newsom amazed everyone with this performance this day.',
    id: '6',
  },
  
];

const songsSection = document.getElementById('songs');

/* eslint-disable no-tabs */
function generateHTML(details) {
  const template = `
      <div class="featured-card${details.class}">
            <div class="card-left">
                <img src="${details.imageUrl}"
                alt="${details.alt}">
            </div>
            <div class="card-right">
                <h3 class="right-song-name">
                    ${details.songName}
                </h3>
                <p class="right-performance">
                    ${details.performance}
                </p>
                <p class="right-summary">
                    ${details.summary}
                </p>
            </div>
        </div>
      `;

  return template;
}

/* eslint-enable no-tabs */

// eslint-disable-next-line array-callback-return
songs.map((song) => {
  const HTMLElement = document.createElement('div');
  HTMLElement.innerHTML = generateHTML(song);

  songsSection.appendChild(HTMLElement);
});
