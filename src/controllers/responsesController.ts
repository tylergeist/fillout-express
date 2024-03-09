import { Request, Response } from 'express';
import fetch from 'node-fetch';
import { applyFilters } from '../services/filterService';
import { Filter, ResponseObject } from '../types';

export const getFilteredResponses = async (req: Request, res: Response) => {
  const { formId } = req.params;
  const filtersString = req.query.filters;
  let filters: Filter[];

  if (typeof filtersString !== 'string' || filtersString.trim() === '') {
    return res
      .status(400)
      .json({ error: 'The filters query parameter is missing or empty.' });
  }

  try {
    filters = JSON.parse(decodeURIComponent(filtersString));
  } catch (error) {
    console.error('Error parsing filters:', error);
    return res
      .status(400)
      .json({ error: 'Invalid JSON format for filters query parameter.' });
  }

  const apiKey = process.env.API_KEY;
  const url = `https://api.fillout.com/v1/api/forms/${formId}/submissions`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching responses: ${response.statusText}`);
    }

    const data: ResponseObject = await response.json();

    const filteredSubmissions = applyFilters(data.responses, filters);
    res.json({
      responses: filteredSubmissions,
      totalResponses: filteredSubmissions.length,
      pageCount: 1,
    });
  } catch (error: any) {
    console.error(`Error in getFilteredResponses: ${error.message}`);
    res.status(500).json({ message: 'Failed to fetch filtered responses' });
  }
};
