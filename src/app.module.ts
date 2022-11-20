import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ArtistService } from './artist/artist.service';
import { ArtistModule } from './artist/artist.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://vova1428:123321@cluster0.qpdgpqx.mongodb.net/?retryWrites=true&w=majority'), ArtistModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
