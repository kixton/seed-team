'use strict';

/**
 * @ngdoc service
 * @name seedApp.TeamMembers
 * @description
 * # TeamMembers
 * Factory in the seedApp.
 */
angular.module('seedApp')
  .factory('TeamMembers', function () {
    var teamMembers = [{
      name: 'Brian Merritt',
      title: 'CEO and Co-Founder',
      summary: 'Brian was previously VP of Engineering at Simple, an online banking company that was acquired by BBVA. He has held leadership roles at Gap and Sony, and was an engineer at Topsy and Jelly. Brian has a BS in Cognitive Neuroscience from Brown University.',
      twitter: 'btmerr',
      linkedin: 'brianmerritt',
      imgUrl: 'https://pbs.twimg.com/profile_images/505455962522525697/1wefOgr2_400x400.jpeg'
      },
      {
      name: 'Ryan Hildebrand',
      title: 'CFO and Co-Founder',
      summary: "Ryan was previously VP of Finance at Simple, an online banking company that was acquired by BBVA. He has held leadership roles at Demandforce and Strands. Ryan is a former  CPA with a BS in Accounting and International Business from Oregon State University.",
      twitter: 'hollywoodcpa',
      linkedin: 'mrryanhildebrand',
      imgUrl: 'https://d1qb2nb5cznatu.cloudfront.net/users/9533-large_jpg'
      },
      {
      name: 'Christopher Swenson',
      title: 'Principal Engineer',
      summary: 'Christopher was previously an engineer at Google and Simple. He previously owned his own consultancy and has consulted numerous clients on secruity. He has published a book on crytography, Modern Cryptanalysis. Christopher has a PhD in Computer Science from University of Tulsa.',
      twitter: 'chris_swenson',
      linkedin: 'christopherswenson',
      imgUrl: 'https://media.licdn.com/mpr/mpr/shrink_200_200/p/1/000/263/25e/04872e5.jpg'
      },
      {
      name: 'Adele Dewey-Lopez',
      title: 'Engineer',
      summary: 'Adele is a number theory PhD student at Emory currently on leave of absence. Adele has a MS and BS in Mathematics from Brigham Young University.',
      twitter: 'adeledeweylopez',
      linkedin: 'adeledeweylopez',
      imgUrl: 'https://media.licdn.com/mpr/mpr/shrink_200_200/p/6/005/06c/3c0/2be2164.jpg'
      }
    ];

    return teamMembers;
    
  });
