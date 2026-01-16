import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CurriculumModule } from './curriculum/curriculum.module';
import { AuthModule } from './auth/auth.module';
import { StudentModule } from './student/student.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    CurriculumModule, 
    AuthModule, 
    StudentModule, 
    MongooseModule.forRoot(process.env.MONGODB_URL!), UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
