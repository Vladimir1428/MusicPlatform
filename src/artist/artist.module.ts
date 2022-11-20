import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Artist, ArtistSchema } from 'src/artist-model/artist-model';
import { ArtistService } from './artist.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Artist.name, schema: ArtistSchema  }])],
  providers: [ArtistService],
  exports: [ArtistService]

})
export class ArtistModule {}
