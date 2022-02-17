import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  constructor() { }

  public video = [
    {vName: 'Meditating', photo: 'assets/1.jpg', like: 0, dislike: 0, desc: 'Meditation is a vital way to purify and quiet the mind, thus rejuvenating the body.'},
    {vName: 'GTA: Ubit', photo: 'assets/3.jpg', like: 0, dislike: 0, desc: 'Look, You Wake Up One Day in Ubit And You Just Cant Run Anymore.'},
    {vName: 'Funvengers', photo: 'assets/4.jpg', like: 0, dislike: 0, desc: 'Cause if we cant study, you can be damn sure we will not let you study as well.'},
    {vName: 'Young and stupid', photo: 'assets/5.jpg', like: 0, dislike: 0, desc: 'I was young and stupid then now i am not young anymore. '},
    {vName: 'Older and still stupid', photo: 'assets/6.jpg', like: 0, dislike: 0, desc: 'I am old enough to know better but young enough to do it anyway.'},
    {vName: 'Bacha party', photo: 'assets/7.jpg', like: 0, dislike: 0, desc: 'Siblings: the only enemy you cant live without.'},
    {vName: 'Qari sahab ka shikar', photo: 'assets/2.jpg', like: 0, dislike: 0, desc: 'A long and beautiful love story of hamza and qari sahab.'},
  ];

  ngOnInit(): void { }

  public likeCounter(video: any) {
    video.like++;
  }

  public dislikeCounter(video: any) {
    video.dislike++;
  }

}
