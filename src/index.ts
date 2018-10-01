import 'reflect-metadata';
import { Container, Service, Inject } from 'typedi';
import { RestClient, IRestResponse } from 'typed-rest-client/RestClient';

/**
 * API URL: https://cex.io/api/last_price/CRYPTO_CURRENCY/CURRENCY
 * eg: https://cex.io/api/last_price/ETH/EUR
 * response:
 *  {
 * 	  lprice: "6578.5",
 * 	  curr1: "BTC",
 * 	  curr2: "USD",
 *  }
 *
 */


 /**
  * Dependency Injection for TS: https://github.com/typestack/typedi
  */

/*
@Service()
class WaterFactory {
    create() {
    }
}

@Service()
class CoffeeMaker {

    @Inject()
    waterFactory: WaterFactory;

    make() {

        this.waterFactory.create();
    }

}

let coffeeMaker = Container.get(CoffeeMaker);
coffeeMaker.make();

*/
