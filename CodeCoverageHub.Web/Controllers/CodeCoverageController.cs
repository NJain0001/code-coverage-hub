using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using Microsoft.AspNetCore.Mvc;
using Palmmedia.ReportGenerator.Core.Parser;
using Palmmedia.ReportGenerator.Core.Parser.Filtering;
using CodeCoverageHub.Models;

namespace CodeCoverageHub.Api {


    [ApiController]
    [Route("api/[controller]")]
    public class CodeCoverageController : ControllerBase
    {
        [HttpGet]
        [Route("getProjects")]
        public IActionResult GetProjects()
        {
            var projectList = new List<Project>()
            {
                new Project()
                {
                    Name = "Candlestick-Analyzer",
                    RepoLink = "",
                    CoverageFilePath = ""
                }
            };
            return Ok(projectList);
        }
        [HttpGet]
        [Route("getCoverageDetails")]
        public IActionResult GetCoverageDetails()
        {
            var parser = new CoverageReportParser(1, 1, new List<string>(), 
                                                  new DefaultFilter(new List<string>()), 
                                                  new DefaultFilter(new List<string>()), 
                                                  new DefaultFilter(new List<string>()));
            
            IReadOnlyCollection<string> testCoverageFilePath = new Collection<string>()
            {
                ""
            };
            var parserResult = parser.ParseFiles(testCoverageFilePath);

            return Ok(parserResult);
        }
    }
}