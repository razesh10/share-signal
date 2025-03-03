
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { ArrowUp, ArrowDown, Search, Filter, DownloadIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Sample data for share values
const shareData = [
  { id: 1, company: "TechVision Inc.", symbol: "TCVN", price: 243.58, change: 5.62, changePercent: 2.36, volume: "3.2M", marketCap: "1.2T" },
  { id: 2, company: "Global Finance Group", symbol: "GFG", price: 87.34, change: -1.23, changePercent: -1.39, volume: "2.1M", marketCap: "528B" },
  { id: 3, company: "EcoEnergy Solutions", symbol: "EES", price: 56.29, change: 2.15, changePercent: 3.97, volume: "1.8M", marketCap: "192B" },
  { id: 4, company: "HealthTech Innovations", symbol: "HTI", price: 128.75, change: -3.21, changePercent: -2.43, volume: "1.5M", marketCap: "312B" },
  { id: 5, company: "Consumer Retail Partners", symbol: "CRP", price: 72.91, change: 1.34, changePercent: 1.87, volume: "1.2M", marketCap: "175B" },
  { id: 6, company: "Advanced Materials Corp", symbol: "AMC", price: 34.56, change: 0.87, changePercent: 2.58, volume: "950K", marketCap: "86B" },
];

// Chart data
const chartData = [
  { name: 'Jan', TCVN: 200, GFG: 80, EES: 40, HTI: 100 },
  { name: 'Feb', TCVN: 208, GFG: 82, EES: 45, HTI: 110 },
  { name: 'Mar', TCVN: 215, GFG: 85, EES: 48, HTI: 105 },
  { name: 'Apr', TCVN: 220, GFG: 83, EES: 52, HTI: 95 },
  { name: 'May', TCVN: 228, GFG: 80, EES: 55, HTI: 90 },
  { name: 'Jun', TCVN: 235, GFG: 85, EES: 54, HTI: 105 },
  { name: 'Jul', TCVN: 243, GFG: 87, EES: 56, HTI: 128 },
];

const ShareValuesTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(shareData);
  const [sortConfig, setSortConfig] = useState({ key: 'price', direction: 'ascending' });

  // Handle search input
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    
    if (term.trim() === '') {
      setFilteredData(shareData);
    } else {
      const filtered = shareData.filter(
        (item) => 
          item.company.toLowerCase().includes(term) || 
          item.symbol.toLowerCase().includes(term)
      );
      setFilteredData(filtered);
    }
  };

  // Handle sorting
  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
    
    const sortedData = [...filteredData].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === 'ascending' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
    
    setFilteredData(sortedData);
  };

  // Get sort direction indicator
  const getSortDirectionIndicator = (key) => {
    if (sortConfig.key !== key) return null;
    return sortConfig.direction === 'ascending' ? 
      <ArrowUp size={14} className="ml-1" /> : 
      <ArrowDown size={14} className="ml-1" />;
  };

  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-sm text-accent font-semibold uppercase tracking-wider"
          >
            Market Data
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="section-heading"
          >
            Share Value Tracker
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-subheading"
          >
            Monitor real-time market performance with our comprehensive stock tracker.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="bg-card rounded-lg p-4 shadow-soft mb-8">
            <h3 className="text-lg font-semibold mb-4">Market Overview</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={chartData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorTCVN" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorGFG" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorEES" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ffc658" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#ffc658" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorHTI" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ff8042" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#ff8042" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <Tooltip />
                  <Area type="monotone" dataKey="TCVN" stroke="#8884d8" fillOpacity={1} fill="url(#colorTCVN)" />
                  <Area type="monotone" dataKey="GFG" stroke="#82ca9d" fillOpacity={1} fill="url(#colorGFG)" />
                  <Area type="monotone" dataKey="EES" stroke="#ffc658" fillOpacity={1} fill="url(#colorEES)" />
                  <Area type="monotone" dataKey="HTI" stroke="#ff8042" fillOpacity={1} fill="url(#colorHTI)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-card rounded-lg p-6 shadow-soft">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <h3 className="text-lg font-semibold">Top Performing Stocks</h3>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search company or symbol..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="pl-9 max-w-[250px]"
                  />
                </div>
                <Button size="sm" variant="outline" className="flex items-center gap-1">
                  <Filter size={14} />
                  <span>Filter</span>
                </Button>
                <Button size="sm" variant="outline" className="flex items-center gap-1">
                  <DownloadIcon size={14} />
                  <span>Export</span>
                </Button>
              </div>
            </div>

            <div className="rounded-md border overflow-hidden">
              <Table>
                <TableHeader className="bg-muted/50">
                  <TableRow>
                    <TableHead 
                      className="w-[250px] cursor-pointer hover:text-accent transition-colors"
                      onClick={() => requestSort('company')}
                    >
                      <div className="flex items-center">
                        Company {getSortDirectionIndicator('company')}
                      </div>
                    </TableHead>
                    <TableHead 
                      className="cursor-pointer hover:text-accent transition-colors"
                      onClick={() => requestSort('symbol')}
                    >
                      <div className="flex items-center">
                        Symbol {getSortDirectionIndicator('symbol')}
                      </div>
                    </TableHead>
                    <TableHead 
                      className="text-right cursor-pointer hover:text-accent transition-colors"
                      onClick={() => requestSort('price')}
                    >
                      <div className="flex items-center justify-end">
                        Price {getSortDirectionIndicator('price')}
                      </div>
                    </TableHead>
                    <TableHead 
                      className="text-right cursor-pointer hover:text-accent transition-colors"
                      onClick={() => requestSort('changePercent')}
                    >
                      <div className="flex items-center justify-end">
                        24h Change {getSortDirectionIndicator('changePercent')}
                      </div>
                    </TableHead>
                    <TableHead className="text-right">Volume</TableHead>
                    <TableHead className="text-right">Market Cap</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.length > 0 ? (
                    filteredData.map((item) => (
                      <TableRow key={item.id} className="hover:bg-muted/20 transition-colors">
                        <TableCell className="font-medium">{item.company}</TableCell>
                        <TableCell>{item.symbol}</TableCell>
                        <TableCell className="text-right font-medium">${item.price.toFixed(2)}</TableCell>
                        <TableCell className="text-right">
                          <Badge 
                            variant="outline" 
                            className={`${
                              item.changePercent > 0 
                                ? 'bg-green-50 text-green-600 border-green-200' 
                                : 'bg-red-50 text-red-600 border-red-200'
                            }`}
                          >
                            {item.changePercent > 0 ? '+' : ''}{item.changePercent.toFixed(2)}%
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right text-muted-foreground">{item.volume}</TableCell>
                        <TableCell className="text-right text-muted-foreground">{item.marketCap}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={6} className="h-24 text-center">
                        No results found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShareValuesTable;
