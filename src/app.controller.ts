import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ArtistService } from './artist/artist.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
              private readonly artistService: ArtistService) {}

  @Get('artist')
   getAllArist() {
    return  this.artistService.findAllArtist();
  }
}
