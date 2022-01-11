﻿using CoffeeShop.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeShop.Repositories
{
  public  interface ICoffeeRepository
    {
        void Add(Coffee coffee);
        void Delete(int id);
        Coffee Get(int id);
        List<Coffee> GetAll();
        void Update(Coffee coffee);

    }
}
