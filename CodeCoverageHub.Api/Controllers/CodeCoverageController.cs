using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using Microsoft.AspNetCore.Mvc;
using Palmmedia.ReportGenerator.Core.Parser;
using Palmmedia.ReportGenerator.Core.Parser.Filtering;

namespace CodeCoverageHub.Api {


    [ApiController]
    [Route("api/[controller]")]
    public class CodeCoverageController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetCoverageDetails()
        {
            var parser = new CoverageReportParser(1, 1, new List<string>(), 
                                                  new DefaultFilter(new List<string>()), 
                                                  new DefaultFilter(new List<string>()), 
                                                  new DefaultFilter(new List<string>()));
            
            IReadOnlyCollection<string> testCoverageFilePath = new Collection<string>()
            {
                @"C:\Workspace\TradingBot\candlestick-analyzer\StockAnalyzerService.Test\TestResults\7eac1a6c-e384-4c08-a9f4-8d3430dd42ce\coverage.cobertura.xml"
            };
            var parserResult = parser.ParseFiles(testCoverageFilePath);

            return Ok(parserResult);
        }
    }
}