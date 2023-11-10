import { SpiderGetInnerTextService } from '@/spiders/spidersGetInnerText.service';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MlService {
  private mlUrl: string;

  constructor(
    private configService: ConfigService,
    private readonly httpService: HttpService,
    private spiderService: SpiderGetInnerTextService,
  ) {
    this.mlUrl = this.configService.get('ml')?.url;
  }

  async getSiteTags(url: string): Promise<{ theme: string | null; category: string | null }> {
    if (!this.mlUrl) {
      return { category: null, theme: null };
    }

    const text = await this.spiderService.getInnerText(url);
    if (text === null) {
      return { category: null, theme: null };
    }

    const response = await this.httpService.axiosRef.post(this.mlUrl, { text }).then(({ data }) => data);
    if (!response.theme) {
      return { category: null, theme: null };
    }
    return mapping.find((m) => m.theme === response.theme)!;
  }
}

const mapping = [
  { theme: 'accountingServices', category: 'business' },
  { theme: 'cargoTransportationAndTransportServices', category: 'business' },
  { theme: 'websiteCreationAndPromotion', category: 'business' },
  { theme: 'legalServices', category: 'business' },
  { theme: 'appliances', category: 'appliances' },
  { theme: 'waterDelivery', category: 'foodAndDrink' },
  { theme: 'deliveryOfPreparedMealsAndProducts', category: 'foodAndDrink' },
  { theme: 'cooking', category: 'foodAndDrink' },
  { theme: 'pets', category: 'animals' },
  { theme: 'stationery', category: 'stationery' },
  { theme: 'healthyEating', category: 'beautyAndHealth' },
  { theme: 'medicine', category: 'beautyAndHealth' },
  { theme: 'perfumesAndCosmetics', category: 'beautyAndHealth' },
  { theme: 'buyingAndRenting', category: 'realEstate' },
  { theme: 'additionalEducationAndCourses', category: 'education' },
  { theme: 'schoolAndUniversity', category: 'education' },
  { theme: 'clothesAndShoes', category: 'clothingShoesAndAccessories' },
  { theme: 'tickets', category: 'holidaysAndTravel' },
  { theme: 'foreignTourism', category: 'holidaysAndTravel' },
  { theme: 'carRental', category: 'holidaysAndTravel' },
  { theme: 'russianTourism', category: 'holidaysAndTravel' },
  { theme: 'giftsAndFlowers', category: 'giftsAndFlowers' },
  { theme: 'job', category: 'job' },
  { theme: 'games', category: 'entertainmentAndLeisure' },
  { theme: 'movie', category: 'entertainmentAndLeisure' },
  { theme: 'books', category: 'entertainmentAndLeisure' },
  { theme: 'music', category: 'entertainmentAndLeisure' },
  { theme: 'hunting', category: 'entertainmentAndLeisure' },
  { theme: 'restaurants', category: 'entertainmentAndLeisure' },
  { theme: 'fishing', category: 'entertainmentAndLeisure' },
  { theme: 'dancing', category: 'entertainmentAndLeisure' },
  { theme: 'theaters', category: 'entertainmentAndLeisure' },
  { theme: 'aTelevision', category: 'entertainmentAndLeisure' },
  { theme: 'agriculturalEquipmentAndMachinery', category: 'agriculturalEquipmentAndMachinery' },
  { theme: 'pregnancyAndChildbirth', category: 'familyAndChildren' },
  { theme: 'wedding', category: 'familyAndChildren' },
  { theme: 'goodsForChildren', category: 'familyAndChildren' },
  { theme: 'sport', category: 'sport' },
  { theme: 'interiorDesign', category: 'constructionArrangementAndRepair' },
  { theme: 'furniture', category: 'constructionArrangementAndRepair' },
  { theme: 'repair', category: 'constructionArrangementAndRepair' },
  { theme: 'householdProducts', category: 'constructionArrangementAndRepair' },
  { theme: 'internetAccessAndMobileCommunications', category: 'telecom' },
  { theme: 'auto', category: 'transport' },
  { theme: 'moto', category: 'transport' },
  { theme: 'banksAndLoans', category: 'finance' },
  { theme: 'investments', category: 'finance' },
  { theme: 'forex', category: 'finance' },
  { theme: 'computerTechnology', category: 'electronics' },
  { theme: 'printersAndMFPs', category: 'electronics' },
  { theme: 'smartphonesAndGadgets', category: 'electronics' },
  { theme: 'photoVideoAndAudioEquipment', category: 'electronics' },
  { theme: 'none', category: 'none' },
];
